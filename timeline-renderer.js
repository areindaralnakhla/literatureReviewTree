/**
 * LiteratureTimeline - Timeline rendering and filtering for literatureDatabase
 */
class LiteratureTimeline {
    constructor(options = {}) {
        this.view = document.getElementById(options.viewId || 'timelineView');
        this.content = document.getElementById(options.contentId || 'timelineContent');
        this.stats = document.getElementById(options.statsId || 'timelineStats');
        this.titleInput = document.getElementById(options.titleId || 'filterTitle');
        this.authorInput = document.getElementById(options.authorId || 'filterAuthor');
        this.tagInput = document.getElementById(options.tagId || 'filterTag');
        this.doiInput = document.getElementById(options.doiId || 'filterDoi');
        this.keywordInput = document.getElementById(options.keywordId || 'filterKeyword');
        this.yearFromInput = document.getElementById(options.yearFromId || 'filterYearFrom');
        this.yearToInput = document.getElementById(options.yearToId || 'filterYearTo');
        this.clearBtn = document.getElementById(options.clearId || 'clearTimelineFilters');
        this.literature = this.resolveLiteratureSource();

        this.filters = {
            title: '',
            author: '',
            tag: '',
            doi: '',
            keyword: '',
            yearFrom: '',
            yearTo: ''
        };

        this.focusTags = new Set([
            'immersion',
            'presence',
            'embodiment',
            'copresence',
            'reality-judgment',
            'approach-avoidance',
            'flow',
            'psychological-activation',
            'anxiety-disorders'
        ]);

        if (!this.view || !this.content) {
            return;
        }

        if (!Array.isArray(this.literature)) {
            if (this.stats) this.stats.textContent = 'Timeline data source not found.';
            if (this.content) {
                this.content.innerHTML = '';
                const empty = document.createElement('div');
                empty.className = 'timeline-empty';
                empty.textContent = 'Could not load literatureDatabase. Please ensure literature-data.js is loaded before timeline-renderer.js.';
                this.content.appendChild(empty);
            }
            return;
        }

        this.bindEvents();
        this.render();
    }

    resolveLiteratureSource() {
        if (typeof literatureDatabase !== 'undefined' && Array.isArray(literatureDatabase)) {
            return literatureDatabase;
        }

        if (Array.isArray(window.literatureDatabase)) {
            return window.literatureDatabase;
        }

        return null;
    }

    bindEvents() {
        const handleInput = () => {
            this.filters.title = (this.titleInput?.value || '').trim();
            this.filters.author = (this.authorInput?.value || '').trim();
            this.filters.tag = (this.tagInput?.value || '').trim();
            this.filters.doi = (this.doiInput?.value || '').trim();
            this.filters.keyword = (this.keywordInput?.value || '').trim();
            this.filters.yearFrom = (this.yearFromInput?.value || '').trim();
            this.filters.yearTo = (this.yearToInput?.value || '').trim();
            this.render();
        };

        this.titleInput?.addEventListener('input', handleInput);
        this.authorInput?.addEventListener('input', handleInput);
        this.tagInput?.addEventListener('input', handleInput);
        this.doiInput?.addEventListener('input', handleInput);
        this.keywordInput?.addEventListener('input', handleInput);
        this.yearFromInput?.addEventListener('input', handleInput);
        this.yearToInput?.addEventListener('input', handleInput);

        this.clearBtn?.addEventListener('click', () => {
            if (this.titleInput) this.titleInput.value = '';
            if (this.authorInput) this.authorInput.value = '';
            if (this.tagInput) this.tagInput.value = '';
            if (this.doiInput) this.doiInput.value = '';
            if (this.keywordInput) this.keywordInput.value = '';
            if (this.yearFromInput) this.yearFromInput.value = '';
            if (this.yearToInput) this.yearToInput.value = '';
            this.filters = { title: '', author: '', tag: '', doi: '', keyword: '', yearFrom: '', yearTo: '' };
            this.render();
        });
    }

    getTimelineBaseSet() {
        return this.literature.filter((lit) => this.isRelevantToTimeline(lit));
    }

    isRelevantToTimeline(lit) {
        const tags = (lit.tags || []).map(tag => String(tag).toLowerCase());
        const textBlob = [lit.title, lit.notes, lit.methodologyTakeaway]
            .filter(Boolean)
            .join(' ')
            .toLowerCase();

        const hasFocusTag = tags.some(tag => this.focusTags.has(tag));
        const hasFocusText = /(immersion|presence|plausibility|place illusion|human behavior|human response|approach|avoidance|vr)/i.test(textBlob);

        return hasFocusTag || hasFocusText;
    }

    getFilteredSet() {
        const base = this.getTimelineBaseSet();
        const titleQuery = this.filters.title.toLowerCase();
        const authorQuery = this.filters.author.toLowerCase();
        const tagQuery = this.filters.tag.toLowerCase();
        const doiQuery = this.filters.doi.toLowerCase();
        const keywordQuery = this.filters.keyword.toLowerCase();
        const from = Number(this.filters.yearFrom);
        const to = Number(this.filters.yearTo);

        return base.filter((lit) => {
            const year = Number(lit.year) || 0;
            const titleOk = !titleQuery || (lit.title || '').toLowerCase().includes(titleQuery);
            const authorOk = !authorQuery || (lit.authors || '').toLowerCase().includes(authorQuery);
            const tagOk = !tagQuery || (lit.tags || []).some(tag => String(tag).toLowerCase().includes(tagQuery));
            const doiOk = !doiQuery || (lit.doi || '').toLowerCase().includes(doiQuery);

            const searchable = [
                lit.title,
                lit.authors,
                lit.publisher,
                lit.doi,
                lit.notes,
                lit.methodologyTakeaway,
                (lit.tags || []).join(' ')
            ]
                .filter(Boolean)
                .join(' ')
                .toLowerCase();

            const keywordOk = !keywordQuery || searchable.includes(keywordQuery);
            const fromOk = !this.filters.yearFrom || year >= from;
            const toOk = !this.filters.yearTo || year <= to;

            return titleOk && authorOk && tagOk && doiOk && keywordOk && fromOk && toOk;
        }).sort((a, b) => (Number(b.year) || 0) - (Number(a.year) || 0));
    }

    render() {
        if (!this.content || !this.stats) return;

        const baseCount = this.getTimelineBaseSet().length;
        const filtered = this.getFilteredSet();

        this.stats.textContent = `Showing ${filtered.length} of ${baseCount} focused papers in timeline`;
        this.content.innerHTML = '';

        if (filtered.length === 0) {
            const empty = document.createElement('div');
            empty.className = 'timeline-empty';
            empty.textContent = 'No papers match your filters. Try a broader author, keyword, or year range.';
            this.content.appendChild(empty);
            return;
        }

        const track = document.createElement('div');
        track.className = 'timeline-track';

        filtered.forEach((paper, index) => {
            track.appendChild(this.renderTimelineEvent(paper, index));
        });

        this.content.appendChild(track);
    }

    renderTimelineEvent(paper, index) {
        const event = document.createElement('article');
        event.className = `timeline-event ${index % 2 === 0 ? 'left' : 'right'}`;

        const marker = document.createElement('div');
        marker.className = 'timeline-marker';
        marker.textContent = String(paper.year || 'N/A');
        event.appendChild(marker);

        const card = document.createElement('div');
        card.className = 'paper-card';

        const title = document.createElement('h4');
        title.className = 'paper-title';

        if (paper.link) {
            const link = document.createElement('a');
            link.href = paper.link;
            link.target = '_blank';
            link.rel = 'noopener noreferrer';
            link.textContent = paper.title || 'Untitled';
            title.appendChild(link);
        } else {
            title.textContent = paper.title || 'Untitled';
        }

        const meta = document.createElement('div');
        meta.className = 'paper-meta';

        const citation = typeof formatCitation === 'function'
            ? formatCitation(paper)
            : `${paper.authors || 'Unknown author'}, ${paper.year || 'Unknown year'}`;

        meta.textContent = `${citation}${paper.publisher ? ` | ${paper.publisher}` : ''}`;

        if (paper.doi) {
            const doi = document.createElement('div');
            doi.className = 'paper-doi';
            doi.textContent = `DOI: ${paper.doi}`;
            card.appendChild(doi);
        }

        card.appendChild(title);
        card.appendChild(meta);

        if (paper.tags?.length) {
            const tagWrap = document.createElement('div');
            tagWrap.className = 'paper-tags';

            paper.tags.forEach((tag) => {
                const chip = document.createElement('span');
                chip.className = 'paper-tag';
                chip.textContent = tag;
                tagWrap.appendChild(chip);
            });

            card.appendChild(tagWrap);
        }

        const notesText = String(paper.notes || '').trim();
        if (notesText) {
            const snippet = document.createElement('p');
            snippet.className = 'paper-snippet';
            snippet.textContent = `${notesText.slice(0, 240)}${notesText.length > 240 ? '...' : ''}`;
            card.appendChild(snippet);
        }

        event.appendChild(card);

        return event;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    window.timelineRenderer = new LiteratureTimeline();
});
