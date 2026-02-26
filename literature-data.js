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
        notes: `This is the paper that help me finally decouple factors.
    Slater, with the help of previous literature from the late 90s, classifies factors that affect human behavior in VR.
    Even though the experiment he conducted based on NLP is probably obsolete, and considering the technology now, it is not too strong to indicate much about presence.
    So I only take the theoretical part of the paper, which is the classification of factors into two main categories: internal and external.`,
        methodologyTakeaway: ``
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
        notes: `This was a comprehensive systematic review of approach-avoidance in 'ecologically valid enviornemnts; so either real setups or in VR'.
    The review collected 413 and ended up with 14 after the screening process.
    It highlights the limitations, and faliures of the current literature, theres always either task is not well designed, stimulus is not well designed, embodied response is not natural, the N is too small.
    Then offers discussion for important considerations and future opportunities for this research, so i have to reread it to not do the same mistakes.`,
        methodologyTakeaway: ``
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
        notes: `This chapter from the book 'Neuroimaging Perconality, Social Cognition, and Character' was very informative and helped me understand approach-avoidance frome a neurobiological (objective) perspective rather than the theoretical, philisophical only, and frankly messy description of J Elliot's.
    Besides explaining goals and motivation in simple organisms and then more complex ones like rats and humans, it mentions many important properties of a stimulus that I should be aware of; its not just valence, but valuation differences, transience, etc., all with useful examples.
    Additionally and more importantly it explains personality's huge impact on the nature of approach-avoidance systems and their activations intensity, as well as the different ways to measure such stable traits.
    It elaborates on two personalities from the Big Five: extraversion and neuroticism, and how they are related to approach-avoidance which is to be considered in my analysis.`,
        methodologyTakeaway: ``
    },
    {
        id: 4,
        title: "A framework for immersive virtual environments (FIVE): Speculations on the role of presence in virtual environments",
        authors: "Slater, M., Wilbur, S., et al.",
        year: 1997,
        publisher: "Presence: Teleoperators and Virtual Environments",
        doi: "",
        link: "",
        tags: ["presence", "immersion"],
        notes: `The degree of immersion can be objectively assessed as the characteristics of a technology, and has dimensions such as the extent to which a display system candeliver an inclusive, extensive, surrounding and vivid illusion of virtual environment to aparticipant. 
        Other dimensions of immersion are concerned with the extent of body matching, and the extent to which there is a self-contained plot in which the participant can act and in which there is an autonomous response. `,
        methodologyTakeaway: `To be read later`
    },
    {
        id: 5,
        title: "Place illusion and plausibility can lead to realistic behaviour in immersive virtual environments",
        authors: "Slater, M.",
        year: 2009,
        publisher: "The Royal Society",
        doi: "",
        link: "",
        tags: ["presence", "immersion", "hardware", "software", "visual", "visual-fov", "psychological-activation", "anxiety-diorders"],
        notes: `This is the earliest paper in which Slater disgusses the concept of "Presence" and its two components: place illusion (PI) and plausability illusion (Psi).
        He also discusses "Immersion" and sensorimotor contingences, describing what would be the ideal immersive VR system (the modalities that should be included at least), and proceeds to describe the VR in 2009 including, unlike CAVE system, standalone HMD with tracking technology updating stereo visuals, audio, and limited haptic feedback.
        There he discusses how immersion relies on hardware and software quality (the internal factors in our tree) by referring to them as "Parameters that determine the quality of the experience" (e.g.,graphics frame rate, extent of tracking (only head? 3Dof, 6Dof, or head and hands, or full body?), latency, quality of images (brightness, spatial, colors, contrast resolutions), FoV, visual quality of the rendered scene (e.g., level of detail, realism, etc.), the dynamics (how well does the behaviour of objects conform to expectations) and the range of sensory modalities accommodated (and within each sensory modality the fidelity of its displays).)
        Therefore, immersive systems can be characterized by the sensorimotor contingencies (SCs) that they support. SCs refer to the actions that we know to carry out in order to perceive, for example, moving your head and eyes to change gaze direction, or bending down and shifting head and gaze direction in order to see underneath something. 
        He defines "valid effectual actions" which is general refering to actions participants take to make changes in the env, "valid sensorimotor actions" which is a subset of acitons that consistently changes images (in all sensory modalities) so that perception may be changed meaningfuly, "valid actions" as their combination: the actions that a participant can take that can result in changes in perception or changes to the environment. 
        Then describes immersion as a property of the valid actions that are possible within the system. System A is at a higher level of immersion than system B if the valid actions of B form a proper subset of those of A. And refers to an IVR that has a set of valid actions that are approximations of reality as a first-order system, with corresponding SCs in at least one sensory modality. A second-order system is one that has valid actions as a proper subset of a first-order system, and so on for lower orders.
        Having the same range of valid SCs as in physical reality is not sufficent: Even with valid head-tracking sensorimotor contingencies, a restricted FoV can still distort behavior: users must relearn how to perceive and act within the system’s limits, so responses may reflect device constraints rather than natural, real-world human behavior.
        Immersion and PI both rely on SCs, but in a CAVE system which is teh same immersivity level for both participants: person A experiences less PI than B. Because person A moving around while B standing still and looking around. A hits a wall (external perception) breaking the PI. A is probing the bounds of perception to a much greater extent than B, and therefore PI will have the opportunity to break more often. Immersion provides the boundaries within which PI can occur.
        Hence, PI is the human response to a given level of immersion, and is bound by the set of SCs possible at that level of immersion. The illusion of ‘being there’ does not refer to the same qualia across different levels of immersion.
        While PI is about how the world is perceived, the Psi is about what is perceived. Psi is the illusion that what is apparently happening is really happening (even though you know for sure that it is not). Think of the avatar smiling at you or stepping back when you approach example.
        Psi is for the virtual reality to provide correlations between external events not directly caused by the participant and his/her own sensations (both exteroceptive and interoceptive). If we consider the avatar that looks at the participant in the eye (the external event), this would be likely to cause a response in the participant that could be expressed by physiological changes such as with respect to heart rate, skin temperature (blushing) and so on
        It is important to realize that Psi does not require physical realism—witness people’s responses in the virtual reprise of the Stanley Milgram obedience experiment, where it was shown that people exhibit anxiety responses when causing pain to a relatively low fidelity virtual character in terms of both visual appearance and behaviour.
        The body is a focal point where PI and Psi are fused. As we have argued, the action involved in looking at your own body provides very powerful evidence for PI (your body is in the place you perceive yourself to be).
        Now suppose you move your limbs and you see the limbs of this virtual body move in synchrony. This is a very powerful event in the external world that clearly relates to you—a correlation between proprioception and visual exteroception.
        `,
        methodologyTakeaway: `
        Is reality judgement the same as Psi? Because teh def of Psi is determined by the extent to which the system can produce events that directly relate to participant, the overall credibility of teh scenariobeing depicted in comparasion with expectations.
        The ideal immersive virtual reality (IVR) system should include (visual, audio, and haptic). This is important to consider if we were pressured to reduce complexity of modality combinations. The more modalities we add, the more constraints on synchronization and delivery accuracy. Refer to paper id: 4 for more details on immersion and characteristics of a system.
        "Realistic Response" is constrainted by the level of "Immersion" which is determined by available "SCs" determined by system physical characteristics/properties and which changes perception and therefore affect "Presence".
        We want to create a system close to a first-order system.
        Displays and interactive capabilities are inseparable: if the participant wants to examine an object very closely, then the extent to which this is possible will be limited by the resolution of the display.
        Using the same questionnaire to measure presence across different systems may not be appropriate, as the factors contributing to presence may differ based on the system's characteristics.
        We must implement Psi in the enviornemnt, events happening directly to you (example: responsive avatars). Psi is the most interesting since it's not that well implemented yet.
        We also see here how internal dynamic states related to psychopathology (e.g., anxiety disorders, paranoia) triggering the "during-study" psychological activation because of certain Psi within the enviornment so we need a suitable questionnaire here to record such interperonsal differences. This is to note that Psi causes external and internal changes.
        Similarly PI can cause the same, if the virtual system is matching the real world. like the presence of a wooden bridge in both physical and virtual env.
        Consider real-time ray tracing in an HMD, so that when the participants moved they could see shadows and reflections of their virtual body move in correlation.
        `
    },
    {
        id: 6,
        title: "A separate reality: An update on place illusion and plausibility in virtual reality",
        authors: "Slater, M., Banakou, D., Beacco, A., Gallego, J., Macia-Varela, F., Oliva, R.",
        year: 2022,
        publisher: "Frontiers Media SA",
        doi: "",
        link: "https://www.frontiersin.org/journals/virtual-reality/articles/10.3389/frvir.2022.914392/full",
        tags: ["presence", "embodiment", "copresence"],
        notes: `Slater clarifies factors to presence by seperating it into two: the place illusion (PI) and plausability illusion (Psi).
    He also talks about Embodiment (the next node in our tree) as the illusion of ownership over thr virtual body.
    A 4th illusion is Copresence which is the belief of being together with other people in teh virtual enviornment.
    So, to summerize so far: Presence (PI and Psi), Embodiment, and Copresence.
    Then he gives us a nice overview of the diverse methods to measuing Presence, obviously either through subjective (questionnaires) or objective (physiological, behavioral) measures, and the importance of using both.
    He also says says the measuiring presence is not the only way assess the user's response to virtual reality experience, and therefore proposes the idea of taking participants preference instead through what he calls "sentiment analysis"'
    Point out also the plausability is the most complex and interesting illusion which we should pay attention to.`,
        methodologyTakeaway: `For us behavioral measure of response is non debatable (core element). As for measure presence, do they mention a method using behavioral data?
        Since a combination of measures is always better, we need to decide between subjective (exhasting) or phsyioloigcal (special hardware and expensive and needs data analysis expertise) as the second measurement method.
        If we opt for subjective, which questionnaire should we use? Which one is the most used and validated? that includes both illusions (Psi and Pi). 
        Does it meantion embodiement measure? Copresence not important since our study is with signle user.
        Decide whether to include sentiment analysis as a measure of user preference, and if so, how to implement it effectively?
        `
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
