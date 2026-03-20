/**
 * Literature Database
 * Each entry represents a paper/article with its metadata and associated nodes
 * Tags should match node IDs from tree-data.js
 * Optional field: image (URL to figure/table/cover image)
 * Optional field: imageLinks ({ label: url }) for multiple inline links in notes/takeaways
 * Optional field: images ([url] or [{ label, url }]) for ordered or labeled inline links
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
        tags: ["internal-factors", "external-factors", "user-perspective"],
        notes: `This is the paper that inspired me to have this tree, to identify the many variables- decouple factors.
        Slater, with the help of previous literature from the late 90s, classifies factors that affect human behavior in VR into internal and external.
        Even though the experiment he conducted based on NLP is probably obsolete, and considering the technology now, it is not too strong to indicate much about presence.
        So I only take the theoretical part of the paper, which is the classification of factors into two main categories: internal and external.`,
        methodologyTakeaway: `Perceptual position that is first-person normally indicates higher presence than third person or abstract perspective.`
    },
    {
        id: 2,
        title: "Approach-Avoidance Bias in Virtual and Real-World Simulations: Insights from a Systematic Review of Experimental Setups",
        authors: "Grasso-Cladera, A., Madrid-Carvajal, J., Walter, S., König, P.",
        year: 2025,
        publisher: "MDPI",
        doi: "",
        link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11852960/",
        tags: ["approach-avoidance", "task-structure", "stimulus-design", "systematic-review"],
        notes: `This was a comprehensive systematic review of approach-avoidance in 'ecologically valid enviornemnts; so either real setups or in VR'.
        The review collected 413 and ended up with 14 after the screening process.
        It highlights the limitations, and faliures of the current literature, it's always either that the task is not well designed, stimulus is not well designed, embodied response is not natural, or the N is too small.
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
        tags: ["psychological-traits", "motivational-state", "stimulus-properties", "approach-avoidance"],
        notes: `This chapter from the book 'Neuroimaging Perconality, Social Cognition, and Character' was very informative and helped me understand approach-avoidance from a neurobiological (objective) perspective rather than the theoretical, philisophical only, and frankly messy description of J Elliot's.
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
        notes: `The degree of immersion can be objectively assessed as the (1) characteristics of the technolog + (2) the extent of body matching. 
        (1) Immersion has 4 aspects concerned with the display of information: Inclusive (I) indicates the extent to which physical reality is shut [an HMD being weightless so that this aspect of reality isnt percieved by the participant], Extensive (E) indicates the range of sensory modalities accommodated. Surrounding (S) indicates the extent to which this virtual reality is panoramic rather than limited to a narrow field. Vivid (V) indicates the resolution, fidelity, and variety of energy simulated within a particular modality (for example, the visual and colour resolution).
        (2) Matching requires that there is match between the participant's proprioceptive feedback about body movements, and the information generated on the displays.
        Perception: is at the center of the position of the VB: visual perception from the viewpoint of the eyes in the head of VB (egocentric vs exocentric).
        Plot: this is the extent to which the VE in a particular context presents a story-line that is self-contained, has its own dynamic, and presents an alternate unfolding sequence of events, quite distinct from those currently going on in the "real world"
        Hollistically: Immersion can be an objective and quantifiable description of what any particular system provide. Presence is a state of consciousness, the (psychological) sense of being in the virtual environment. We can also refer to our tree (immersion: the left side/ external, and presence: the riht side/ internal).
        Presence is both a subjective (PI) and objective (Psi) description of a person's state wrt an environment. Subjective relates to their evaluation of their degree of "being there", the extent to which they think of the virtual environment as "place like" (subject to suspension of disbelief). The objective is an observable behavioural phenomenon, the extent to which individuals behave in a VE similar to the way they would behave in similar circumstances in everyday reality
        Influence of Immersion on Presence with example studies: 
        a) Concerning inclusivness (from Patel 1994): subjects were grouped according to the quality of sound they received - sound only from the real world of the laboratory, white noise generated by the HMD speakers, non-directional sound generated by the speakers, and finally spatialised directional sound. The result was that the largest change in the influence on presence was from the "no virtual sound" condition to the "white noise" condition - suggesting that the white noise isolated the subject from the real world sounds, supporting this notion of inclusion. 
        b) Concerning vividness (from Uno and Slater 1997): subjects were exposed to differing combinations of elasticity, friction, and collision response in the context of a virtual bowling alley. It was found that in their application, the more realistic simulation of friction was significantly and positively associated with reported presence, but that more accurate simulations of elasticity and collision response did not have such an effect. 
        c) Concerning proprioceptive matching (Slater, Usoh, and Steed 1995) found that subjects who walked through a virtual environment using a "walking in place" technique reported a higher sense of presence than those who navigated the environment using a pointing device
        d) Concerning extensivness (Hendric and Barfield 1996): In one study spatialized sound was introduced or not into a visual VE. In the second study, the comparison was between non-spatialized sound and spatialized sound. In each case there was a significant effect on presence - spatialized sound led to a higher reported presence than both no sound and non-spatialized sound.
        e) Concerning plot at the time of the study they knew of no study that examines the influenece of plot as inod "story line", however, (Welch et. al 1996): included interactivity as one of the indp variables...
        In (Slater, Linakis, Usoh, and Kooper, 1996), they explored the relatoioship between immersion, presence, and performance. Concerned a task involving comprehension and memory of complex 3D Objects..., they saw that increase of immersion in the aspect of egocentric rather exocentric, and vividness is what increased task perfromance. The study also found that reported presence was higher for egocentric compared to exocentric immersion, but that presence itself was not associated with task performance.
        Dimensions of Immersion in Shared Environments: vividness is considered first. The impact on group interaction of the level of extensiveness of a virtual space is harder to demonstrate.... etc, he continues to describe the studies available on work collaboration and framing it within the the immersion aspects he discussed. He stresses on vividness and plor (envionmental autonomy) and interactivity. 
        `,
        methodologyTakeaway: `To further control immersion, focus on its 4 aspects (I) inclusive, (2) Extensive, (3) Surrounding, and (4) Vivid.
        Each of these dimensions of immersion exists on multiple levels. The most fundamental levels may correlate with the responses of the autonomic nervous system (mentioned in the approach-avoidance neurobiology paper). 
        Here he doesnt actually yet mention PI and Psi until recent papers, but i can infer that because his definitions are still consistent.
        In that paper also he shows the relationship between immersion and presence; the impact of immersion display aspects (I, S, E, V) is mediated through two filters: (a) the application/ task context [the location within a chamber, auditory quality of orchestra example- audio quality is very important in this case but visual is less important], and (b) the perceptual requirements of the individual (participant preferenecs to various modalities- what mathew is doing). 
        Immersion and type of perception can affect task performnace but not presence. 
        So we can say that presence is not there for task perfromance but rather to enable behavior that is as realistic as what a participant would do in real life.
        Paragraph 2.5 is a great summary of the main flow of immersive VEs.
            "The most important idea that we have presented here is the idea of external, objectively measurable characteristics that lead to a capability of placing an individual inside a computer generated environment. This is what we have called immersion, and have considered immersion ideally requiring inclusive, extensive, surrounding, and vivid display systems, where there is real-time matching between proprioception and sensory data." 
            The VE should portray a story line, in which the individual can participate and modify.
            On the other hand, presence is the potential psychological and behavioural response to immersion
            A highly present individual should identify with the virtual body portrayed in the VE, and therefore consider him or her self as being located in the environment in which that body is portrayed
            Such a highly present individual would be observed to behave in a VE in a manner similar to how they would behave in a similar environment in everyday reality. 
        The question to ask is: what display characteristics (relevant to a certain application domain) maximise presence? 
        It may be the case that a non-realistic display enhances presence, or that the characteristics that enhance presence are not the same as those that enhance a particular type of task performance. The separation between immersion and presence allows both to be investigated, and even if it turns out that they are correlated in a particular application, this may not be due to causal connection.
        `
    },
    {
        id: 5,
        title: "Place illusion and plausibility can lead to realistic behaviour in immersive virtual environments",
        authors: "Slater, M.",
        year: 2009,
        publisher: "The Royal Society",
        doi: "",
        link: "",
        tags: ["presence", "immersion", "hardware", "software", "visual", "visual-fov", "psychological-activation", "anxiety-disorders"],
        notes: `This is the earliest paper I believe in which Slater disgusses the concept of "Presence" as two components: place illusion (PI) and plausability illusion (Psi).
        SCs (sensorimotor contingencies) refer to the actions that we know to carry out in order to perceive, for example, moving your head and eyes to change gaze direction, or bending down and shifting head and gaze direction in order to see underneath something. 
        In my own words, PI refers to the sense of being there resulting by consistent SCs. PI could result from a single modality like visual yaw rotation and resulting head tracking, but the more modalities -> more SCs -> more immersion -> more PI. However, PI could be easily break eitehr by introducing a new modalitity that will require relearning how to percieve the envionment all over again (even tho could be quick), or when we hit a wall (an external SCs).
        Psi, the more challenging one, happens when the environment feels real, avatars smile at you when you approach, respond to what you say, the envionment respond to your presence and actions in a consistent matter in a way that matches your expectations and prior knowledge. Much like reality judgement (defines elsewhere in the literature). And Psi is not really affected by the reaslism of the scenem could be at its strongest in a very low polly env. 
        Breaking Psi is much more harmful and could not recover the same way PI can recover because PI is cause by teh physical system's characteristics (giving a number of SCs) so if one breaks, user relearns how to percieve again according to available SCs. While Psi is more about the overall credibility of the scenario being depicted in comparasion with expectations. If it doesnt match that, then it would just not give a strong sense of agency, our cognitive ability will continue to remind us that this is not real even though deep down we know for sure nothing is real. 
        Therefore "breaks in presence (BIPs)" becomes an interesting way of measuring presence. 
        He describes an ideal immersive VR system as the one that at least has visual, audio, and haptic modalities, and the more modalities we add obviously more immersive, but the more constraints on synchronization and delivery accuracy.
        There he discusses how immersion is defined by the number of SCs, therefore relying on hardware and software quality (the external factors in our tree) by referring to them as "Parameters that determine the quality of the experience" (e.g.,graphics frame rate, extent of tracking (only head? 3Dof, 6Dof, or head and hands, or full body?), latency, quality of images (brightness, spatial, colors, contrast resolutions), FoV, visual quality of the rendered scene (e.g., level of detail, realism, etc.), the dynamics (how well does the behaviour of objects conform to expectations) and the range of sensory modalities accommodated (and within each sensory modality the fidelity of its displays).)
        Since immersion is closley correlated to modalities and system characteristics, then immersive systems can be characterized by the sensorimotor contingencies (SCs) that they support. 
        He defines "valid effectual actions" which is general refering to actions participants take to make changes in the env, "valid sensorimotor actions" which is a subset of acitons that consistently changes images (in all sensory modalities) so that perception may be changed meaningfuly, "valid actions" as their combination: the actions that a participant can take that can result in changes in perception or changes to the environment. 
        Then describes immersion as a property of the valid actions that are possible within the system. System A is at a higher level of immersion than system B if the valid actions of B form a proper subset of those of A. And refers to an IVR that has a set of valid actions that are approximations of reality as a first-order system, with corresponding SCs in at least one sensory modality. A second-order system is one that has valid actions as a proper subset of a first-order system, and so on for lower orders.
        Having the same range of valid SCs as in physical reality is not sufficent: Even with valid head-tracking sensorimotor contingencies, a restricted FoV can still distort behavior: users must relearn how to perceive and act within the system's limits, so responses may reflect device constraints rather than natural, real-world human behavior.
        Back to previous point; immersion and PI both rely on SCs, but in a CAVE system which is teh same immersivity level for both participants: person A experiences less PI than B. Because person A moving around while B standing still and looking around. A hits a wall (external perception) breaking the PI. A is probing the bounds of perception to a much greater extent than B, and therefore PI will have the opportunity to break more often. Immersion provides the boundaries within which PI can occur.
        Hence, PI is the human response to a given level of immersion, and is bound by the set of SCs possible at that level of immersion. The illusion of 'being there' does not refer to the same qualia across different levels of immersion.
        The body is a focal point where PI and Psi are fused. The action involved in looking at your own body provides very powerful evidence for PI (your body is in the place you perceive yourself to be).
        `,
        methodologyTakeaway: `
        QUESTION: What is really "reality judgement" and is it the same as Psi? Because the def. of Psi according to Slater is determined by the extent to which the system can produce events that directly relate to participant, the overall credibility of the scenario being depicted in comparasion with expectations. 
        ANSWER: Still, not very clear, it seems like it's an inconsistency in literature taxonomy which makes sense because it's complex and early. However, I will consider them as the same for now (trusting Slater), and if I find more papers that clarify this, then I can update the tree taxonomy later.
        The ideal immersive virtual reality (IVR) system should include (visual, audio, and haptic). This is important to consider if we were pressured to reduce complexity of modality combinations. The more modalities we add, the more constraints on synchronization and delivery accuracy. Refer to paper id: 4 for more details on immersion and characteristics of a system.
        We want to create a system close to a first-order system.
        Using the same questionnaire to measure presence across different systems (first order vs 4th order) may not be appropriate (comparable), as the factors contributing to presence may differ based on the system's characteristics. Is this where we consider "sentiment analysis" or should we not worry because we are already getting behavrioal data. Questionnaires are just to increase confidence, answer unclear patterns, and increase the analysis's power.
        We must implement Psi in the enviornemnt, events happening directly to you (example: responsive avatars).Consider also real-time ray tracing in an HMD, so that when the participants move they could see shadows and reflections of their virtual body move in correlation.
        We also see here how internal dynamic states related to psychopathology (e.g., anxiety disorders, paranoia) triggering the "during-study" psychological activation because of certain Psi within the enviornment so we need a suitable questionnaire here to record such interperonsal differences. This is to note that Psi causes external and internal changes. Which questionnaire to use?
        Similarly PI can cause the same, the place alone reminds user of a specific traumatic experience. Also if the virtual system is matching the physical room and objects. Like walking on a wooden bridge in VR at the same place where a physical wooden block is placed.
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
        tags: ["presence", "embodiment", "copresence", "literature-review", "presence-measure-questionnaires"],
        image: "figures\\presence_measurements.jpg",
        notes: `Slater clarifies factors to presence by seperating it into two: the place illusion (PI) and plausability illusion (Psi).
        He also talks about Embodiment as a third illusion of ownership over the virtual body.
        A 4th illusion is Copresence which is the belief of being together with other people in the virtual enviornment.
        So, to summerize so far: Presence (PI and Psi), Embodiment, and Copresence. However, seems like if PI and Psi are done well, it paves the way automatically for embodiment and copresence, so they are not really separate illusions but rather consequences of the first two.
        Then he gives us a nice overview of the diverse methods to measuing Presence, obviously either through subjective (questionnaires) or objective (physiological, behavioral) measures. He also introduces other ways such as "breaks in presence" (BIPs), Configuration Transitions similar to what I already read in Skarbez's paper on copresence, and finally, Sentiment Analaysis. Here's a nice [table] summerizing this. 
        Using questionnaires alone has many problems mentioned in page 5; mainly that they may bring about the very feelings that it is supposed to measure.
        The last doesnt really have to be a measure of presence alone, since presence is not the only way assess the user's response to virtual reality experience, and therefore proposes the idea of taking participants preference instead through what he calls "sentiment analysis", this is important because we dont have to enforce our own definitions as researchers on participants who have no idea about the terms we use in questionnaires and what they entail.
        Point out also the plausability is the most complex and interesting illusion which we should pay attention to.
        To make Psi slightly more feasible to implement and approachm they introdcue the term "Coherence", see paper id 10. Coherence describes some of the factors that go into producing Psi.
        Goes to explain further that realism is not essential to presence. In fact, it may easily cause breaks of presence. Since the more realism, the more expectations on matching reality both in looks (or else e.g., uncanny valley) and actions. Therefore, breaking presence often and reminding participants quicker that this is temporay, fake env (even if they truly know it).
        Besides PI and Psi, the 3rd illusion of embodiemnts which is partially related to SCs therefore PI, but also to the looks of the virtual body itself. That VB has an effect on physiological, behavrioal, attitudinal and congnitive changes.
        Just a filler note: the study of presence has been a major study of VR research since the early 1990s.
        Some other nice explanatory quotes: "SCs produce a massive probability of sense of place; the probability that I am in a place that i see, hear, and can touch- leading to but seperate from PI", "desktop app. cannot provide the SoP mentioned in this paper because...., immersion here refers to the objective cabailities of the system and not the subjective response." Sometimes desktop players express that they feel that the are in the game or readers say ther are in the book, nut that refers to their own attentional ability or focus + extra imagination and is not a fact: the physical existance of system immersing them and blocking them from their own reality.
        "This discussion emphasises our distinction between “immersion” and “presence.” The “immersion” is fully under the control of the implementation. Whether a virtual character smiles back at you when you smile towards it, will have to have been programmed. The extent to which a virtual environment can meet expectations depends on prior research amongst potential participants about the critical elements that a scenario must support, and then actually programming these. Whether this investigation has been carried out or not, and then the required elements programmed into the application is a matter of fact."
        "Then “presence” (PI and Psi) refers to how people respond to the “immersion.” As mentioned above this is not deterministic, since people have different prior experience, personalities, knowledge, and so on. We can think PI and Psi as conditional probabilities, and consider: conditional on a particular immersive configuration what are the probabilities of PI or Psi occurring? Given different immersive configurations these probabilities may change. Thus immersion sets the ground for PI and Psi."
        "Similarly we use the terms “embodiment” to refer to the multisensory factors that provide evidence about the body—for example, it is seen as life-sized from the perspective of the eyes of that body, it moves synchronously with the person’s real movements, when something touches it the person feels this on their real body, and so on. Embodiment configurations, which are completely determined by the hardware and programming, may give rise to the illusion of body ownership. Again, this is not deterministic but provides the basis."
        `,
        methodologyTakeaway: `For us behavioral measure of response is non debatable (core element). Some cited studies used behavrioal and physiological data along with questonnaires to measure presence. 
        Using behavrioal or physiological data alone is a bit dangerous for now, as there are no considerable amount of literature consensus on how to interpret such information regarding presence. But also because they would rely on elliciting a stimulus with high arousal enough to to be detected.
        Since a combination of measures is always better, we need to decide between subjective (exhasting) or phsyioloigcal (special hardware and expensive and needs data analysis expertise) as the second measurement method. But so far, it seems like, for our first study, it will be both behavioral, a suitable popular questionnaire that seperates PI and Psi, and sentiment analysis with reinforcement agent. 
        Again which questionnaire should we use will rely on what i conclude from reading the paper ids 23 and 21.  
        Does it meantion embodiement measure? as i mentioned in the notes since VB has effect on the behavrioal and conitive attitudes. Copresence not important since our study is with signle user.
        Forsentiment analysis as a measure of user preference, and if so, how to implement it effectively? the paper gives some guideliens and citations to some study doing it (Liu, 2012) and (Bakshi et al., 2016).
        Although PI might be the default state, low Plausibility might also be default. PI is just part of what VR is (even though it can fail). However, Psi requires deliberate design: how can a scenario be designed and implemented so that participants buy into it? This does not necessarily involve photorealism, nor realism in the sense that the scenario might not be anything that can happen in real life.
        Since Psi (design choice) is hard to implement due to the many options of how objects and things behave plausability to real life and their relation to expectations and peoples backgrounds and demographics etc. We can rate our own developed scene in terms of Psi or make participants in a seperate study do that and develop a framework for plausible scenes. 
        He talks more about coherence here and the 3 factors that it to give Psi which are important to get back to. 
        `
    },
    {
        id: 7,
        title: "How immersive is enough? A meta-analysis of the effect of immersive technology on user presence",
        authors: "Cummings, J. J., Bailenson, J. N.",
        year: 2016,
        publisher: "Taylor & Francis",
        doi: "",
        link: "",
        tags: ["immersion", "meta-analysis", "presence", "presence-measure-questionnaires", "visual-fov", "visual-image-quality", "visual-stereoscopy", "tracking", "visual-update-rate", "audio-type", "user-perspective"],
        notes: `They test the assumption of "immersion leads to presence" or "the higher the degree of immersion the higher the presence" by conducting a meta-analysis of 83 studies that manipulated immersion features (e.g., tracking level, update rate, image quality, field of view, sound, user perspective, etc) and measured presence (self-reported questionnaires).
        In essence, the meta-analysis meticulously converts diverse study findings related to presence (on immersion features/external variables manipulations) into a common, standardized metric (r), transforms and weights them to account for sample size, and then aggregates these to provide an overall effect size and its confidence interval, offering a comprehensive statistical summary of the evidence
        The theoratical model of presence used here is that of (Writh et al., 2007), it's focused on spactial presence. A model that understand presence as a two step process: in which the user first constructs a spatialized mental model of the mediated environment (e.g.,ascertains that the environment is a space) and then comes to accept this mediated environment over grounded reality as his or her primary frame of self-reference (e.g., ascertains that he or she is situated within that space). Completing this second step is thought to result in the experience of spatial presence, a two-dimensional construct construed in terms of perceived self-location and perceived possibilities to act within the environment at hand.
        The downside is that they only include immersion features for visual and audio modalities not haptic or olfactory features (they acknolwegde that these will be more common in the future, but at the time of the study (2016) they were not common I guess for a meta analysis)
        They also only include studies with self reported measures of presence because apprantely behavioral, cognitive, and physiological measures are still open to interpretation when it comes to indicating presence. For example posture going down can indicate presence but also leaning back is same thing, they could also be a sign  discomforted. 
        I see questionnaires like PQ, ITC-SOPI, SUS, Percieved Spatial Presence, SVUP, TPI, Lombard and Diiton, PIFF2, custom questionnaires, etc. 
        In table 2 they show the aggregated r (each individual study r has been converted to z score averaged among studies in the same category then converted back to r then CI 95% for this meta analysis) for each imemrison feature, it was hard to draw conclusion on update rate and perspective because of the small N, image quality however didnt have high r therefore impact on presence, neither did sound. Seteroscopy, FoV, and tracking did, with tracking being highest impact r>0.3 = 0.645. The high vs low immersion (more abstract feature), did also show medium imoact r = 0.339. 
        The 95% CI (confidence interval) show whetehr there's high range or low range, the later being better. High range CI is affected by low sample size. 
        That alone (sampling error), however, did not explain the variability in effect size across studies within a single feature. Therefore, we must check heterogeneity.
        Heterogeneity in a meta-analysis refers to the variability among the effect sizes of individual studies. If studies are homogeneous, their true effect sizes are assumed to be similar. If they are heterogeneous, their true effect sizes are considered to differ significantly
        A significant result from the conducted heterogeneity test indicates that the variance in correlation coefficients (effect sizes) across the studies is not solely due to sampling error. This suggests that there might be potential moderating variables within the sample that explain these differences
        The meta-analysis attempted to investigate these potential moderators, such as study characteristics (e.g., year conducted, sample demographics, disciplinary background, presence measurement instruments, task types, social context).w However, the paper notes that the different operationalizations of immersion and the proposed moderating variables tracked did not statistically significantly reduce the heterogeneity in correlations 
        `,
        methodologyTakeaway: `In our future study, provide enough details of the system configurations to ascertain the relative immersivness
        In my stuyd i must include a subjective measure of presence, objective measures (behavioral, cognitive, physiological) methods, even though prefered, are still open to interpretation and for that reason they aren't included in this meta analysis (see page 6: operationalizations of presence)
        Might need to read a review on presence subjective questionnaires to see what they consist of and which one is more meaningful to use vs having something customized to our study or a combination. In this paper they summerize the used questionnaires in the Note (last section)
        I may need to read about teh different types of presence because there are too many terms in the literature: spatial presence, social presence, self presence, etc. and see which one is more relevant to our study and therefore which questionnaire to use.
        The paper concludes that given a limited budget, it is better to focus on tracking, FoV, and stereoscopy to enhance presence, rather than higher quality visual or auditory stimuli.
        An interesting quote mentioned on page 27: " perfect physical fidelity is impossible and would not be of psychological interest if achieved, but perfect Functional Fidelity... is completely achievable and is of considerable psychological interest"
        The hetrogenity test conducted shows that even a meta analysis cant detect a clear relationship in this domain, while it helps, this question of presence and immersion is so highly dimentional and filled with non easily controlled variables. Not to be pessemistic, but such quetsions will just take time until researchers converge on a single great methodology or system configuration, and tools. But for now, a single or a group of studies and their findings cant be too trusted due to the insane amount of confouding variables (an unmeasured variable that influences both the supposed cause and the supposed effect).
        It should be kept in mind that the findings of this meta-analysis apply to presence as it is most generally conceptualized, what K. M. Lee (2004a) construes as spatial presence. These results may not carry over to designing mediated experiences for eliciting feelings of self-presence or social presence. For example, the situational model users must construct to experience social presence may depend far less on spatial cues and far more on issues of communication channels. f so, immersive system features are perhaps not the independent variables of concern when looking at social presence; rather, multi-modality, synchronous versus asynchronous communication, familiarity, and manipulations of artificial intelligence of agents and social actors may be more relevant variables to consider.
        One other limitation of this study is that it compares studies involving technololgies that change and improve over time.... "it might make it more difficult to identify an exact threshold level at which a given immersive feature is enough or its effect plateaus." 
        so its important to acknowledge clearly the date of this meta analysis when mentioning. 
        Also due to some restrictions they had to follow for the sake of teh meta analsysis, behavioral measure of presence were not examined (need to look for an existing study but i doubt it exsists, perhabs the use of plume as a consistent measuement tool, use of a standard 3D enviornemnt profiling tool (3D scene), and potentially standarized response eliciting scenes could help in teh future because otherwise we see what we saw here, read future direction in last paragraph p. 28). Also due to that potential interesting manipulations of immersion were not included in this study.
        `
    },
    {
        id: 8,
        title: "Influence of Scenarios and Player Traits on Flow in Virtual Reality",
        authors: "Lavoué, É., Villenave, S., Serna, A., Didier, C., Baert, P., Lavoué, G.",
        year: 2024,
        publisher: "IEEE Transactions on Visualization and Computer Graphics",
        doi: "10.1109/TVCG.2023.3332261",
        link: "https://ieeexplore-ieee-org.ec-lyon.idm.oclc.org/document/10315963",
        tags: ["flow", "env-scene-type", "task-structure", "game-mechanics", "psychological-traits", "player-traits", "vr-experience"],
        notes: `They refernece Coskszentmihalyi for the definition of flow as "the optimal experience" and "the holistic sensation that people feel when they act with total involvement. Also according to Shin, flow is "the mental state where complete involvement, enjoyment, and loss of one's senses of time and space are accompanied.
        Additionally, flow felt by users depends on the task independently from the technological quality of the VRE. In this paper, they examine whether flow may depend on the scenario performed within the same VRE.
        Flow is a multi-dimensional construct, each dimension is not impacted the same way by thr scenario and not influenced equally (positivley/negatively) by player traits.
        They conclude that the type of scenario and the order they are presented to the users have an impact on specific dimensions of the flow experience, several dimensions being higher when the scenario is performed last. And that almost all dimensions of flow are influenced by the player traits. The Aestethic trait has rather positive influence on user flow in all three scenarios 


        `,
        methodologyTakeaway: `This study implies that we need to consider the scenario design due to individual differences specifically, in this case, the player traits. This must contribute to enhancing the user experience. 
        We first must allow time for practice in the VRE
        With the above, we therefore provide afforances that support preconditions of flow
        what are preconditions of flow?
        `,
    },
    {
        id: 9,
        title: "The relationship between individual characteristics and experienced presence",
        authors: "Ling, Y., Nefs, H. T., Brinkman, W.-P., Qu, C., Heynderickx, I.",
        year: 2013,
        publisher: "Computers in Human Behavior",
        doi: "",
        link: "",
        tags: ["presence", "psychological-traits", "immersive-tendency", "absorption", "dissociation"],
        notes: ``,
        methodologyTakeaway: ``
    },
    {
        id: 10,
        title: "A psychophysical experiment regarding components of the plausibility illusion",
        authors: "Skarbez, R., Neyret, S., Brooks, F. P., Slater, M., Whitton, M. C.",
        year: 2017,
        publisher: "IEEE",
        doi: "",
        link: "",
        tags: ["presence", "reality-judgment", "presence-measure-questionnaires"],
        notes: `They reinforce my initial understanding before even reading the literature that when one experineces a perfect VR envronment (or as they say "PI and Psi" and therefore presence), one should also respond realisticly to stimuli from the virtual scenario.
        In the literature, any works examining the system characteristics or its SCs would be on immersion and therefore leading to PI, but when it comes to Psi which seems less studies and mastered, in the literature we will encounter "coherence" which refers to the factors contributing to Psi (Skarbez, 2015)
        Broadly, system characteristics that contribute to Psi are: behavior of vistual humans in the enviornment, behavior of physical objects in the environment, and the like. 
        Rovira et al., in 2009 also, say that an env. must satisfy three reqs: (1) It must be correlational (the actions of the user elicit responses from the env.), (2) It must be self-referential (there must be elements of the scenario that refer directly to the user), (3) It must be credibile (the. behavior of the env. must be consistent with the user's prior knowledge).
        The experiment wentr as follows": participants were placed in the system configuration with the highest level of immersion, instrtucted to remember their feeling of Psi, and then match whichever feeling they were instructed to remember by choosing transitions from lower-to-higher quality congigurations.
        They varied the following coherence factors:  the coherence of virtual human behavior (VH), the behavior of one's own virtual body (VB), the coherence of physical interactions in the VE (P), and the scenario coherence (S). A given configuration is denonted by a vector C = {VH,VB, P, S}
        Their results examined: accepted configurations (they show probability of each configuration being accepted if reached and the percentage of it being accepted of the total configurations that were accepted), the transitions (and for that they conduct a transition probability matrix from the orders of configurations chosen by each participant and the show the most likely path of transition using markov chain) and finally questionnaire results were included in the discussion.
        They saw patterns between males vs females. They did Fisher's exact test here.
        They split the two group as having high vs low presence based on the questionnaire results (likert scale 0-2 vs 3-7) and saw that all people who reported high presense had the ball interaction at level 2 while the others had the ball at 0 or 1. Couldn't say for certain if that was causation or correlation and if the later then in what direction. However they speculated that the playing with the ball more extensively lead to more more engagement engagement within the scenario and therefore felt more present.
        `,
        methodologyTakeaway: `According their experiment's results, the Psi factors in terms of ordered importance are: (1) quality of avatar behavior/ own body [VB], (2) correspondance between scenario and the visual apparance of the enviornment [S], (3) behavior of other virtual humans in the environment [VH], (4) the physical behavior of objects in the environment [P].
        They use a post experiment questionnaire: "a modified version of Slater-Usoh-Steed (SUS) presence questionnate", is it the most suitable for Psi according to slater, 2022 paper.
        It's important to look at the procedure of other experiemnts before starting out own, for those it was: Consent form -> demographics questionnaire -> informed verbally and on paper about the ability to withdraw at any time without giving any reasons -> optitrack and calibration procedure -> began the experiment (started with the maximum level of all the factors: the highest level of coherence) -> post experiment questionnaire
        Also what to tell the participants in the beginning of the experiment is essential and might affect so many internal factors. Our initial instuctions should be chose carefullu, for example for this exp.:
        At the start, participants were adviced to walk around the room and describe what they see, move their body and observe it in teh mirror, to establish a sense of embodiment, instructed to play with the ball between their feet.. they were asked to focus on the sensation of reality, they show them levels of each factor in a specific order, then they can begin the experiment.
        They were told that the they would be playing a game in which the goal was to reach the optimal sensation of reality they experienced at the beginning of the experience and that they would earn five points each time they would reach this level of reality.....
        Participants started the experiemnt with random configurations (refer to this study for randomization strategy and figures). Essentially each participnt had 8 trails {0,0,0,0}, {1,0,0,0}, {0,1,0,0}, {0,0,1,0}, {0,0,0,1}, and three random ones used from the 10 possibilities where a chnage was already made. Each trial was given the changce to be improve to real to the "optimial sensation of reality" using 6 changes which had to be incrimental. And they had to declare which next factor they wanted to improve. 
        They made the assumption that each trial is statistically independent, even though they know this is not teh case because participants develop knowledge over time regarding which factor has more priority. For us, we consider this as a weakness and hope to not make such assumption if our experiment design is strong.
        We can modify known questionnaires to fit out experiemnts. 
        Eventually, they conclude that the vistual body is the most important factor of Psi. Regarding the other factors, it is very important to have them in level 1 but not necessarily in level 2. Second most important factor seems to be the scenario coherence (noting that this is not just about the quality and the complexity of the env. but also the appropriatness of the env. to the scenario presented). Finally response to the ball which was there for the factor of physical objects behavior, it was not the same for all participants, but was very important for those who intercated with it extensively (refer to that subsection it is interesting and highlights the usefulness of the questionnaire).
        Correlational vs Referential vs Credible: " In level 2, the VH addresses the participant directly, adding correlation and referentiality to the behavior. The virtual body, physical behavior, and scenario factors all offer increasing credibility at higher levels of each factor, while the virtual body and physical behavior also offer increasing levels of correlation and referentiality."
        They suggest that the full-body tracking is teh technology that can contribute the most to Psi, and that the body may indeed be the focal point where PI and Psi are fused. But I think this is narror, avatar behavior VH relies possible on AI technology which is just as important. The bigger an dnmore natural the experiemnt the more we will realize that other factors are equally as important depending on the situation/ scenario.
        `
    },
    {
        id: 11,
        title: "Psychological variables and reality judgment in virtual environments: the roles of absorption and dissociation",
        authors: "Baños, R., Botella, C., Garcia-Palacios, A., Villa, H., Perpiñá, C., Gallardo, M.",
        year: 1999,
        publisher: "CyberPsychology & Behavior",
        doi: "",
        link: "",
        tags: ["reality-judgment", "presence", "psychological-traits", "immersive-tendency", "absorption", "dissociation"],
        notes: ``,
        methodologyTakeaway: ``
    },
    {
        id: 12,
        title: "Presence equation: An investigation into cognitive factors underlying presence",
        authors: "Sas, C., O'Hare, G. M. P.",
        year: 2003,
        publisher: "Presence",
        doi: "",
        link: "",
        tags: ["presence", "cognitive-abilities", "psychological-traits", "absorption", "empathy", "immersive-tendency"],
        notes: ``,
        methodologyTakeaway: ``
    },
    {
        id: 13,
        title: "The impact of personality factors on the experience of spatial presence",
        authors: "Sacau, A., Laarni, J., Ravaja, N., Hartmann, T.",
        year: 2005,
        publisher: "The 8th International Workshop on Presence (Presence 2005)",
        doi: "",
        link: "",
        tags: ["presence", "psychological-traits", "big-five", "agreeableness", "absorption"],
        notes: ``,
        methodologyTakeaway: ``
    },
    {
        id: 14,
        title: "Personality and presence in virtual reality: Does their relationship depend on the used presence measure?",
        authors: "Kober, S. E., Neuper, C.",
        year: 2013,
        publisher: "International Journal of Human-Computer Interaction",
        doi: "",
        link: "",
        tags: ["presence", "psychological-traits", "big-five", "absorption", "immersive-tendency"],
        notes: ``,
        methodologyTakeaway: ``
    },
    {
        id: 15,
        title: "Absorption, dissociation, locus of control and presence in virtual reality",
        authors: "Murray, C. D., Fox, J., Pettifer, S.",
        year: 2007,
        publisher: "Computers in Human Behavior",
        doi: "",
        link: "",
        tags: ["presence", "absorption", "dissociation", "locus-control", "psychological-traits"],
        notes: ``,
        methodologyTakeaway: ``
    },
    {
        id: 16,
        title: "Individual differences in the sense of presence",
        authors: "Jurnet, I. A., Beciu, C. C., Maldonado, J. G.",
        year: 2005,
        publisher: "Proceedings of Presence",
        doi: "",
        link: "",
        tags: ["presence", "stable-traits", "psychological-traits", "immersive-tendency"],
        notes: ``,
        methodologyTakeaway: ``
    },
    {
        id: 17,
        title: "Personality-related differences in subjective presence",
        authors: "Laarni, J., Ravaja, N., Saari, T., Hartmann, T.",
        year: 2004,
        publisher: "Proceedings of the Seventh Annual International Workshop Presence",
        doi: "",
        link: "",
        tags: ["presence", "psychological-traits", "big-five", "extraversion", "agreeableness"],
        notes: ``,
        methodologyTakeaway: ``
    },
    {
        id: 18,
        title: "Immersion in mediated environments: The role of personality traits",
        authors: "Weibel, D., Wissmath, B., Mast, F. W.",
        year: 2010,
        publisher: "Cyberpsychology, Behavior, and Social Networking",
        doi: "",
        link: "",
        tags: ["immersion", "presence", "psychological-traits", "big-five", "stable-traits"],
        notes: ``,
        methodologyTakeaway: ``
    },
    {
        id: 19,
        title: "Experienced presence within computer-mediated communications: Initial explorations on the effects of gender with respect to empathy and immersion",
        authors: "Nicovich, S. G., Boller, G. W., Cornwell, T. B.",
        year: 2005,
        publisher: "Journal of Computer-Mediated Communication",
        doi: "",
        link: "",
        tags: ["presence", "immersion", "gender", "empathy", "psychological-traits"],
        notes: ``,
        methodologyTakeaway: ``
    },
    {
        id: 20,
        title: "Peripersonal and interpersonal space in virtual and real environments: Effects of gender and age",
        authors: "Iachini, T., Coello, Y., Frassinetti, F., Senese, V. P., Galante, F., Ruggiero, G.",
        year: 2016,
        publisher: "Journal of Environmental Psychology",
        doi: "",
        link: "",
        tags: ["gender", "age", "spatial-ability", "env-scene-type"],
        notes: ``,
        methodologyTakeaway: ``
    },
    {
        id: 21,
        title: "Questionnaire Measures and Physiological Correlates of Presence: A Systematic Review",
        authors: "Grassini, S., Laumann, K.",
        year: 2020,
        publisher: "Frontiers in Psychology",
        doi: "",
        link: "",
        tags: ["presence", "systematic-review", "presence-measure-questionnaires", "presence-measure-physiological"],
        notes: ``,
        methodologyTakeaway: ``
    },
    {
        id: 22,
        title: "Being present in a real or virtual world: A EEG study",
        authors: "Petukhov, I. V., Glazyrin, A. E., Gorokhov, A. V., Steshina, L. A., Tanryverdiev, I. O.",
        year: 2020,
        publisher: "International Journal of Medical Informatics",
        doi: "10.1016/j.ijmedinf.2019.103977",
        link: "",
        tags: ["presence", "presence-measure-physiological", "eeg"],
        notes: ``,
        methodologyTakeaway: ``
    },
    {
        id: 23,
        title: "Measuring presence in virtual environments: A survey",
        authors: "Souza, V., Maciel, A., Nedel, L., Kopper, R.",
        year: 2021,
        publisher: "ACM Computing Surveys (CSUR)",
        doi: "",
        link: "",
        tags: ["presence", "literature-review", "presence-measure-questionnaires", "presence-measure-physiological"],
        notes: ``,
        methodologyTakeaway: ``
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
