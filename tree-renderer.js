/**
 * TreeDiagram - Interactive hierarchical tree visualization with zoom, pan, collapse/expand, and tooltips
 * Features: Dynamic layout, responsive design, multi-level coloring, node expansion control
 */
class TreeDiagram {
    // Centralized configuration - modify here for easy customization
    static CONFIG = {
        layout: { nodeWidth: 140, nodeHeight: 50, levelHeight: 140, spineOffset: 20, verticalOffset: 30, padding: 40 },
        zoom: { min: 0.5, max: 4 },
        colors: { 0: '#df0cbfff', 1: '#af2fdeff', 2: '#0c5eebff', 3: '#2989d3ff', 4: '#06b4a0ff', 5: '#20e08dff' }
    };

    constructor(svgId, data) {
        this.svg = document.getElementById(svgId);
        this.data = data;
        this.zoom = 1;
        this.panX = 0;
        this.panY = 0;
        this.expandedNodes = new Set();
        this.literatureMode = false; // Track if literature mode is active
        
        this.initializeExpandedState(data);
        this.setupEventListeners();
    }

    // Initialize all expanded nodes recursively
    initializeExpandedState(node) {
        if (node.children?.length) {
            this.expandedNodes.add(node.id);
            node.children.forEach(child => this.initializeExpandedState(child));
        }
    }

    // Toggle expand/collapse state and re-render
    toggleNode(nodeId) {
        this.expandedNodes.has(nodeId) ? this.expandedNodes.delete(nodeId) : this.expandedNodes.add(nodeId);
        this.render();
    }

    // Setup all event listeners for interactions
    setupEventListeners() {
        const container = document.getElementById('treeContainer');
        const timelineView = document.getElementById('timelineView');
        const tooltip = document.getElementById('tooltip');

        // Tooltip handling
        document.addEventListener('mousemove', (e) => {
            const info = e.target.dataset?.info;
            tooltip.style.display = info ? 'block' : 'none';
            if (info) {
                tooltip.textContent = info;
                tooltip.style.left = (e.clientX + 10) + 'px';
                tooltip.style.top = (e.clientY + 10) + 'px';
            }
        });
        document.addEventListener('mouseleave', () => (tooltip.style.display = 'none'), true);

        // Zoom controls
        document.getElementById('zoomInBtn')?.addEventListener('click', () => {
            this.zoom = Math.min(TreeDiagram.CONFIG.zoom.max, this.zoom * 1.2);
            this.refresh();
        });
        document.getElementById('zoomOutBtn')?.addEventListener('click', () => {
            this.zoom = Math.max(TreeDiagram.CONFIG.zoom.min, this.zoom * 0.8);
            this.refresh();
        });
        document.getElementById('resetBtn')?.addEventListener('click', () => {
            this.zoom = 1;
            this.panX = 0;
            this.panY = 0;
            this.refresh();
        });

        // Mouse wheel zoom
        this.svg.addEventListener('wheel', (e) => this.handleWheel(e), { passive: false });

        // Pan setup - handles both mouse and touch
        this.setupPan(container);
        
        // Literature mode toggle button
        const toggleBtn = document.getElementById('findLitBtn');
        if (toggleBtn) {
            toggleBtn.addEventListener('click', () => {
                this.literatureMode = !this.literatureMode;
                toggleBtn.classList.toggle('active', this.literatureMode);
                this.render(); // Re-render to show/hide literature counts
            });
        }

        // Timeline mode toggle button
        const timelineBtn = document.getElementById('timelineBtn');
        if (timelineBtn && container && timelineView) {
            timelineBtn.addEventListener('click', () => {
                const showTimeline = timelineView.classList.contains('hidden');

                timelineView.classList.toggle('hidden', !showTimeline);
                timelineView.style.display = showTimeline ? 'block' : 'none';

                container.style.display = showTimeline ? 'none' : 'block';

                timelineBtn.classList.toggle('active', showTimeline);

                // Reset literature mode button when leaving tree view
                if (showTimeline && toggleBtn) {
                    this.literatureMode = false;
                    toggleBtn.classList.remove('active');
                }

                if (!showTimeline) {
                    this.render();
                    this.updateZoomLevel();
                }
            });
        }
        
        // Close overlay button
        const closeBtn = document.getElementById('closeOverlay');
        const overlay = document.getElementById('literatureOverlay');
        if (closeBtn && overlay) {
            closeBtn.addEventListener('click', () => {
                overlay.classList.remove('visible');
            });
            
            // Close on backdrop click
            overlay.addEventListener('click', (e) => {
                if (e.target === overlay) {
                    overlay.classList.remove('visible');
                }
            });
        }
    }

    // Centralized pan control for mouse and touch
    setupPan(container) {
        let isPanning = false, startX = 0, startY = 0;

        const handleStart = (e, isTouch) => {
            isPanning = true;
            [startX, startY] = isTouch ? [e.touches[0].clientX, e.touches[0].clientY] : [e.clientX, e.clientY];
            container.classList.add('dragging');
        };

        const handleMove = (e, isTouch) => {
            if (!isPanning) return;
            const [cX, cY] = isTouch ? [e.touches[0]?.clientX, e.touches[0]?.clientY] : [e.clientX, e.clientY];
            if (!cX) return;
            this.panX += cX - startX;
            this.panY += cY - startY;
            [startX, startY] = [cX, cY];
            this.updateTransform();
        };

        const handleEnd = () => {
            isPanning = false;
            container.classList.remove('dragging');
        };

        this.svg.addEventListener('mousedown', (e) => handleStart(e, false));
        document.addEventListener('mousemove', (e) => handleMove(e, false));
        document.addEventListener('mouseup', handleEnd);

        this.svg.addEventListener('touchstart', (e) => e.touches.length === 1 && handleStart(e, true));
        document.addEventListener('touchmove', (e) => handleMove(e, true));
        document.addEventListener('touchend', handleEnd);
    }

    // Handle mouse wheel zoom
    handleWheel(e) {
        e.preventDefault();
        const oldZoom = this.zoom;
        this.zoom = Math.max(
            TreeDiagram.CONFIG.zoom.min,
            Math.min(TreeDiagram.CONFIG.zoom.max, this.zoom * (e.deltaY > 0 ? 0.9 : 1.1))
        );

        const rect = this.svg.getBoundingClientRect();
        this.panX -= (e.clientX - rect.left) * (this.zoom - oldZoom) / oldZoom;
        this.panY -= (e.clientY - rect.top) * (this.zoom - oldZoom) / oldZoom;

        this.refresh();
    }

    // Update SVG transform and zoom display
    updateTransform() {
        this.svg.querySelector('g')?.setAttribute('transform', `translate(${this.panX}, ${this.panY}) scale(${this.zoom})`);
    }

    updateZoomLevel() {
        document.getElementById('zoomLevel').textContent = Math.round(this.zoom * 100) + '%';
    }

    refresh() { this.updateTransform(); this.updateZoomLevel(); }

    // Main render function
    render() {
        this.svg.innerHTML = '';
        const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
        
        const positions = new Map();
        this.calculateLayout(this.data, 0, 0, positions);
        this.setViewBox(positions);
        this.drawConnections(g, this.data, positions);
        this.drawNodes(g, this.data, positions);
        
        g.setAttribute('transform', `translate(${this.panX}, ${this.panY}) scale(${this.zoom})`);
        this.svg.appendChild(g);
    }

    // Calculate SVG viewBox based on content bounds
    setViewBox(positions) {
        let [minX, maxX, minY, maxY] = [0, 0, 0, 0];
        const w = TreeDiagram.CONFIG.layout.nodeWidth / 2;
        const h = TreeDiagram.CONFIG.layout.nodeHeight / 2;
        
        positions.forEach(({ x, y }) => {
            minX = Math.min(minX, x - w);
            maxX = Math.max(maxX, x + w);
            minY = Math.min(minY, y - h);
            maxY = Math.max(maxY, y + h);
        });

        const p = TreeDiagram.CONFIG.layout.padding;
        this.svg.setAttribute('viewBox', `${minX - p} ${minY - p} ${maxX - minX + 2*p} ${maxY - minY + 2*p}`);
        this.svg.setAttribute('preserveAspectRatio', 'xMidYMid meet');
    }

    // Calculate node positions recursively
    calculateLayout(node, x, y, positions, level = 0) {
        positions.set(node.id, { x, y, level });

        // Skip children if node is collapsed
        if (!this.expandedNodes.has(node.id) || !node.children?.length) {
            return TreeDiagram.CONFIG.layout.nodeWidth + 40;
        }

        const allChildrenAreLeaves = node.children.every(c => !c.children?.length);

        if (allChildrenAreLeaves) {
            this.layoutVerticalChildren(node, x, y, positions, level);
            return TreeDiagram.CONFIG.layout.nodeWidth + 20;
        }

        return this.layoutHorizontalChildren(node, x, y, positions, level);
    }

    // Layout children vertically (for leaf nodes)
    layoutVerticalChildren(node, x, y, positions, level) {
        const startY = y + TreeDiagram.CONFIG.layout.levelHeight + TreeDiagram.CONFIG.layout.verticalOffset;
        const childHeight = TreeDiagram.CONFIG.layout.nodeHeight + 50;
        node.children.forEach((child, i) => {
            positions.set(child.id, { x, y: startY + i * childHeight, level: level + 1 });
        });
    }

    // Layout children horizontally (for branches)
    layoutHorizontalChildren(node, x, y, positions, level) {
        const childWidths = node.children.map(c => this.getSubtreeWidth(c, level + 1));
        const totalWidth = childWidths.reduce((a, b) => a + b, 0);
        
        let currentX = x - totalWidth / 2;
        node.children.forEach((child, i) => {
            this.calculateLayout(child, currentX + childWidths[i] / 2, y + TreeDiagram.CONFIG.layout.levelHeight, positions, level + 1);
            currentX += childWidths[i];
        });
        return totalWidth;
    }

    // Get width needed for a subtree
    getSubtreeWidth(node, level) {
        if (!node.children?.length) return TreeDiagram.CONFIG.layout.nodeWidth;
        return node.children.every(c => !c.children?.length) 
            ? TreeDiagram.CONFIG.layout.nodeWidth + 40
            : node.children.reduce((sum, c) => sum + this.getSubtreeWidth(c, level + 1), 0);
    }

    // Draw all connections recursively
    drawConnections(g, node, positions) {
        if (!this.expandedNodes.has(node.id) || !node.children?.length) return;

        const parentPos = positions.get(node.id);
        const allChildrenAreLeaves = node.children.every(c => !c.children?.length);

        allChildrenAreLeaves 
            ? this.drawSpineConnectors(g, node, parentPos, positions)
            : this.drawStepConnectors(g, node, parentPos, positions);

        node.children.forEach(child => this.drawConnections(g, child, positions));
    }

    // Draw spine connector for vertically stacked children
    drawSpineConnectors(g, node, parentPos, positions) {
        const children = node.children;
        const firstPos = positions.get(children[0].id);
        const lastPos = positions.get(children[children.length - 1].id);
        const spineX = parentPos.x - TreeDiagram.CONFIG.layout.nodeWidth / 2 - TreeDiagram.CONFIG.layout.spineOffset;
        const h = TreeDiagram.CONFIG.layout.nodeHeight / 2;

        this.drawConnectorLine(g, parentPos.x, parentPos.y + h, parentPos.x, firstPos.y);
        this.drawConnectorLine(g, parentPos.x, firstPos.y, spineX, firstPos.y);
        this.drawConnectorLine(g, spineX, firstPos.y, spineX, lastPos.y);
        
        children.forEach(child => {
            const childPos = positions.get(child.id);
            this.drawConnectorLine(g, spineX, childPos.y, childPos.x - TreeDiagram.CONFIG.layout.nodeWidth / 2, childPos.y);
        });
    }

    // Draw step connector for horizontally arranged children
    drawStepConnectors(g, node, parentPos, positions) {
        const h = TreeDiagram.CONFIG.layout.nodeHeight / 2;
        node.children.forEach(child => {
            const childPos = positions.get(child.id);
            const midY = (parentPos.y + h + childPos.y - h) / 2;
            
            const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            path.setAttribute('d', `M ${parentPos.x} ${parentPos.y + h} L ${parentPos.x} ${midY} L ${childPos.x} ${midY} L ${childPos.x} ${childPos.y - h}`);
            this.applyConnectorStyle(path);
            g.appendChild(path);
        });
    }

    // Helper to draw connector lines with standard styling
    drawConnectorLine(g, x1, y1, x2, y2) {
        const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        line.setAttribute('x1', x1);
        line.setAttribute('y1', y1);
        line.setAttribute('x2', x2);
        line.setAttribute('y2', y2);
        this.applyConnectorStyle(line);
        g.appendChild(line);
    }

    // Apply connector styling
    applyConnectorStyle(el) {
        el.setAttribute('stroke', '#bbb');
        el.setAttribute('stroke-width', '2.5');
        el.setAttribute('stroke-linecap', 'round');
        el.setAttribute('stroke-linejoin', 'round');
        el.setAttribute('fill', 'none');
    }

    // Draw all nodes recursively
    drawNodes(g, node, positions) {
        const pos = positions.get(node.id);
        const { width, height, fontSize, lineHeight } = this.getNodeSizing(pos.level, node.label);
        const hasChildren = node.children?.length > 0;
        const isExpanded = this.expandedNodes.has(node.id);

        const nodeGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
        nodeGroup.style.cursor = hasChildren ? 'pointer' : 'default';

        if (hasChildren) {
            nodeGroup.addEventListener('click', (e) => {
                e.stopPropagation();
                if (this.literatureMode) {
                    this.showLiteratureOverlay(node.id, node.label);
                } else {
                    this.toggleNode(node.id);
                }
            });
        } else if (this.literatureMode) {
            // Allow clicking leaf nodes in literature mode
            nodeGroup.style.cursor = 'pointer';
            nodeGroup.addEventListener('click', (e) => {
                e.stopPropagation();
                this.showLiteratureOverlay(node.id, node.label);
            });
        }

        this.drawNodeRect(nodeGroup, pos, width, height, node);

        const lines = node.label.split('\n');
        lines.length > 1 
            ? this.drawMultilineText(nodeGroup, pos, lines, width, fontSize, lineHeight)
            : this.drawSingleText(nodeGroup, pos, node.label, fontSize);

        if (hasChildren) {
            this.drawExpandIndicator(nodeGroup, pos, width, height, isExpanded);
        }
        
        // Show literature count badge in literature mode
        if (this.literatureMode && typeof getLiteratureCountForNode === 'function') {
            const count = getLiteratureCountForNode(node.id, true);
            if (count > 0) {
                this.drawLiteratureBadge(nodeGroup, pos, width, height, count);
            }
        }

        g.appendChild(nodeGroup);

        if (node.children && isExpanded) {
            node.children.forEach(child => this.drawNodes(g, child, positions));
        }
    }

    // Calculate node sizing based on level and text
    getNodeSizing(level, label) {
        const lines = label.split('\n').length;
        let [w, h, fs, lh] = [TreeDiagram.CONFIG.layout.nodeWidth, TreeDiagram.CONFIG.layout.nodeHeight, 12, 16];

        if (level === 0) [w, h, fs, lh] = [160, 55, 14, 18];
        else if (level === 1) [w, h, fs, lh] = [140, 50, 12, 16];

        if (lines > 1) h = Math.max(h, lines * lh + 20);
        return { width: w, height: h, fontSize: fs, lineHeight: lh };
    }

    // Draw node rectangle with optional tooltip
    drawNodeRect(g, pos, width, height, node) {
        const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        rect.setAttribute('x', pos.x - width / 2);
        rect.setAttribute('y', pos.y - height / 2);
        rect.setAttribute('width', width);
        rect.setAttribute('height', height);
        rect.setAttribute('rx', 6);
        rect.setAttribute('fill', TreeDiagram.CONFIG.colors[pos.level] || '#667eea');
        rect.setAttribute('stroke', 'white');
        rect.setAttribute('stroke-width', '2');
        rect.setAttribute('filter', 'drop-shadow(0 2px 4px rgba(0,0,0,0.15))');

        if (node.info) {
            rect.setAttribute('data-node-id', node.id);
            rect.setAttribute('data-info', node.info);
        }
        g.appendChild(rect);
    }

    // Draw single-line text
    drawSingleText(g, pos, label, fontSize) {
        const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        text.setAttribute('x', pos.x);
        text.setAttribute('y', pos.y);
        text.setAttribute('text-anchor', 'middle');
        text.setAttribute('dominant-baseline', 'middle');
        text.setAttribute('font-size', fontSize);
        text.setAttribute('font-weight', '600');
        text.setAttribute('fill', 'white');
        text.setAttribute('pointer-events', 'none');
        text.textContent = label;
        g.appendChild(text);
    }

    // Draw multi-line text (left-aligned)
    drawMultilineText(g, pos, lines, width, fontSize, lineHeight) {
        const startY = pos.y - ((lines.length - 1) * lineHeight) / 2;
        const textStartX = pos.x - width / 2 + 15;

        lines.forEach((line, i) => {
            const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
            text.setAttribute('x', textStartX);
            text.setAttribute('y', startY + i * lineHeight);
            text.setAttribute('text-anchor', 'start');
            text.setAttribute('dominant-baseline', 'middle');
            text.setAttribute('font-size', fontSize);
            text.setAttribute('font-weight', '600');
            text.setAttribute('fill', 'white');
            text.setAttribute('pointer-events', 'none');
            text.textContent = line;
            g.appendChild(text);
        });
    }

    // Draw expand/collapse indicator
    drawExpandIndicator(g, pos, width, height, isExpanded) {
        const ix = pos.x + width / 2 - 12;
        const iy = pos.y - height / 2 + 10;

        const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        circle.setAttribute('cx', ix);
        circle.setAttribute('cy', iy);
        circle.setAttribute('r', '5');
        circle.setAttribute('fill', 'rgba(0,0,0,0.2)');
        circle.setAttribute('pointer-events', 'none');
        g.appendChild(circle);

        const sign = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        sign.setAttribute('x', ix);
        sign.setAttribute('y', iy);
        sign.setAttribute('text-anchor', 'middle');
        sign.setAttribute('dominant-baseline', 'middle');
        sign.setAttribute('font-size', '10');
        sign.setAttribute('font-weight', 'bold');
        sign.setAttribute('fill', 'white');
        sign.setAttribute('pointer-events', 'none');
        sign.textContent = isExpanded ? '−' : '+';
        g.appendChild(sign);
    }
    
    // Draw literature count badge
    drawLiteratureBadge(g, pos, width, height, count) {
        const badgeX = pos.x + width / 2 - 12;
        const badgeY = pos.y + height / 2 - 10;
        
        const badge = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        badge.setAttribute('cx', badgeX);
        badge.setAttribute('cy', badgeY);
        badge.setAttribute('r', '8');
        badge.setAttribute('fill', '#10b981');
        badge.setAttribute('stroke', 'white');
        badge.setAttribute('stroke-width', '1.5');
        badge.setAttribute('pointer-events', 'none');
        g.appendChild(badge);
        
        const countText = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        countText.setAttribute('x', badgeX);
        countText.setAttribute('y', badgeY);
        countText.setAttribute('text-anchor', 'middle');
        countText.setAttribute('dominant-baseline', 'middle');
        countText.setAttribute('font-size', '9');
        countText.setAttribute('font-weight', 'bold');
        countText.setAttribute('fill', 'white');
        countText.setAttribute('pointer-events', 'none');
        countText.textContent = count > 99 ? '99+' : count;
        g.appendChild(countText);
    }
    
    // Show literature overlay for a node
    showLiteratureOverlay(nodeId, nodeLabel) {
        if (typeof getLiteratureForNode !== 'function') {
            console.warn('Literature functions not available');
            return;
        }
        
        const literature = getLiteratureForNode(nodeId, true);
        const overlay = document.getElementById('literatureOverlay');
        const header = document.getElementById('overlayTitle');
        const listContainer = document.getElementById('literatureList');
        
        if (!overlay || !header || !listContainer) return;
        
        // Update header
        header.textContent = `Literature for: ${nodeLabel}`;
        
        // Clear and populate list
        listContainer.innerHTML = '';
        
        if (literature.length === 0) {
            listContainer.innerHTML = '<p style="text-align: center; color: #999; padding: 20px;">No literature found for this node.</p>';
        } else {
            literature.forEach(lit => {
                const entry = document.createElement('div');
                entry.className = 'lit-entry';
                
                const title = document.createElement('div');
                title.className = 'lit-title';
                if (lit.link) {
                    const link = document.createElement('a');
                    link.href = lit.link;
                    link.target = '_blank';
                    link.textContent = lit.title;
                    title.appendChild(link);
                } else {
                    title.textContent = lit.title;
                }
                
                const citation = document.createElement('div');
                citation.className = 'lit-citation';
                citation.textContent = formatCitation(lit);
                
                if (lit.publisher) {
                    const publisher = document.createElement('div');
                    publisher.className = 'lit-publisher';
                    publisher.textContent = lit.publisher;
                    citation.appendChild(publisher);
                }
                
                const tags = document.createElement('div');
                tags.className = 'lit-tags';
                lit.tags.forEach(tag => {
                    const badge = document.createElement('span');
                    badge.className = 'lit-tag';
                    badge.textContent = tag;
                    tags.appendChild(badge);
                });
                
                entry.appendChild(title);
                entry.appendChild(citation);
                entry.appendChild(tags);
                
                if (lit.notes) {
                    const notes = document.createElement('div');
                    notes.className = 'lit-notes';
                    notes.textContent = lit.notes;
                    entry.appendChild(notes);
                }

                if (lit.methodologyTakeaway) {
                    const takeaway = document.createElement('div');
                    takeaway.className = 'lit-takeaway';

                    const takeawayTitle = document.createElement('div');
                    takeawayTitle.className = 'lit-takeaway-title';
                    takeawayTitle.textContent = 'How we apply this in our paper';

                    const takeawayList = document.createElement('ol');
                    takeawayList.className = 'lit-takeaway-list';

                    const takeawayItems = Array.isArray(lit.methodologyTakeaway)
                        ? lit.methodologyTakeaway
                        : String(lit.methodologyTakeaway)
                            .split(/\r?\n+/)
                            .map(item => item.trim())
                            .filter(Boolean);

                    takeawayItems.forEach(itemText => {
                        const item = document.createElement('li');
                        item.textContent = itemText;
                        takeawayList.appendChild(item);
                    });

                    if (takeawayItems.length > 0) {
                        takeaway.appendChild(takeawayTitle);
                        takeaway.appendChild(takeawayList);
                        entry.appendChild(takeaway);
                    }
                }
                
                listContainer.appendChild(entry);
            });
        }
        
        // Show overlay
        overlay.classList.add('visible');
    }
}

// Initialize tree on DOM load
document.addEventListener('DOMContentLoaded', () => {
    const diagram = new TreeDiagram('treeSvg', treeData);
    diagram.render();
    diagram.updateZoomLevel();
    window.addEventListener('resize', () => diagram.render());
});
