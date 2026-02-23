/**
 * Literature Database
 * Each entry represents a paper/article with its metadata and associated nodes
 * Tags should match node IDs from tree-data.js
 */
const literatureDatabase = [
    // Example entries - replace with your actual literature
    {
        id: 1,
        title: "Representations systems, perceptual position, and presence in immersive virtual environments",
        authors: "Slater, M., Usoh, M.",
        year: 1993,
        publisher: "MIT Press",
        doi: "",
        link: "https://publicationslist.org/data/melslater/ref-22/representation%20systems%20etc.pdf",
        tags: ["internal-factors", "external-factors"],
        notes: "This is the paper that help me finally decouple factors. Slater, with the help of previous literature from the late 90s, classifies factors that affect human behavior in VR. Even though the experiment he conducted based on NLP is probably obsolete, and considering the technology now, it is not too strong to indicate much about presence."
    },
    {
        id: 2,
        title: "Approach-Avoidance Bias in Virtual and Real-World Simulations: Insights from a Systematic Review of Experimental Setups",
        authors: "Grasso-Cladera, A., Madrid-Carvajal, J., Walter, S., König, P.",
        year: 2025,
        publisher: "MDPI",
        doi: "",
        link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11852960/",
        tags: ["attention-focus", "embodiment", "task-structure", "stimulus-design"],
        notes: "This was a comprehensive systematic review of approach-avoidance in 'ecologically valid enviornemnts; so either real setups or in VR', the review collected 413 and ended up with 14 after the screening process. It highlights the limitations, and faliures of the current literature, theres always either task is not well designed, stimulus is not well designed, embodied response is not natural, the N is too small. Then offers discussion for important considerations and future opportunities for this research, so i have to reread it to not do the same mistakes."
    },
    {
        id: 3,
        title: "Approach/avoidance",
        authors: "McNaughton, N., DeYoung, C. G., Corr, P. J.",
        year: 2016,
        publisher: "Elsevier",
        doi: "",
        link: "http://www.philipcorr.net/uploads/downloads/270.pdf",
        tags: ["personality", "motivational-state", "stimulus-properties", "attention-focus"],
        notes: "This chapter from the book 'Neuroimaging Perconality, Social Cognition, and Character' was very informative and helped me understand approach-avoidance frome a neurobiological (objective) perspective rather than the theoretical, philisophical only, and frankly messy description of J Elliot's. Besides explaining goals and motivation in simple organisms and then more complex ones like rats and humans, it mentions many important properties of a stimulus that I should be aware of; its not just valence, but valuation differences, transience, etc., all with useful examples. Additionally and more importantly it explains personality's huge impact on the nature of approach-avoidance systems and their activations intensity, as well as the different ways to measure such stable traits. It elaborates on two personalities from the Big Five: extraversion and neuroticism, and how they are related to approach-avoidance which is to be considered in my analysis."
    },
    {
        id: 4,
        title: "A separate reality: An update on place illusion and plausibility in virtual reality",
        authors: "Slater, M., Banakou, D., Beacco, A., Gallego, J., Macia-Varela, F., Oliva, R.",
        year: 2022,
        publisher: "Frontiers Media SA",
        doi: "",
        link: "https://www.frontiersin.org/journals/virtual-reality/articles/10.3389/frvir.2022.914392/full",
        tags: ["sense-of-presence", "embodiment", "reality-judgment"],
        notes: "Wonderful paper! Still reading in progress. But in a nutshell, it clarifies the 2-4 different illusions; two of which relate to presence: place illusion (PI) and plausibility illusion (Psi). It gives clear examples of what they mean and how they manifest in VR. Brings attention to reality judgement difference across participants, all with examples from real studies. Summerizes the literature on subjective quesstionares for presnce, and cites some important review that include objective methods of assesing presence as well. It also discusses illusion of embodiment and co-presence which relies on the past three."
    },
    

    // Add more literature entries here
];

/**
 * Get literature count for a specific node (including all descendants)
 */
function getLiteratureCountForNode(nodeId, includeDescendants = false) {
    if (!includeDescendants) {
        return literatureDatabase.filter(lit => lit.tags.includes(nodeId)).length;
    }
    
    // Get all descendant node IDs
    const allNodeIds = getNodeAndDescendantIds(nodeId);
    return literatureDatabase.filter(lit => 
        lit.tags.some(tag => allNodeIds.includes(tag))
    ).length;
}

/**
 * Get all literature for a specific node
 */
function getLiteratureForNode(nodeId, includeDescendants = false) {
    if (!includeDescendants) {
        return literatureDatabase.filter(lit => lit.tags.includes(nodeId));
    }
    
    const allNodeIds = getNodeAndDescendantIds(nodeId);
    return literatureDatabase.filter(lit => 
        lit.tags.some(tag => allNodeIds.includes(tag))
    );
}

/**
 * Get node and all its descendants recursively
 */
function getNodeAndDescendantIds(nodeId) {
    const node = findNodeById(treeData, nodeId);
    if (!node) return [nodeId];
    
    const ids = [nodeId];
    if (node.children) {
        node.children.forEach(child => {
            ids.push(...getNodeAndDescendantIds(child.id));
        });
    }
    return ids;
}

/**
 * Find node by ID in tree
 */
function findNodeById(node, id) {
    if (node.id === id) return node;
    if (node.children) {
        for (const child of node.children) {
            const found = findNodeById(child, id);
            if (found) return found;
        }
    }
    return null;
}

/**
 * Format citation (Last name et al., Year)
 */
function formatCitation(literature) {
    const firstAuthor = literature.authors.split(',')[0].trim();
    const lastName = firstAuthor.split(' ').pop();
    return `${lastName} et al., ${literature.year}`;
}
