const treeData = {
    id: 'human-behavior-vr',
    label: 'Behavior in VR',
    info: 'The root categorization of all factors affecting human behavior and responses in virtual reality environments.',
    children: [
        {
            id: 'external-factors',
            label: 'External Factors',
            info: 'Environmental and system-level variables outside the person that influence behavior in VR.',
            children: [
                {
                    id: 'hardware',
                    label: 'Hardware',
                    info: 'Physical VR equipment specifications including displays, controllers, and sensory devices.',
                    children: [
                        {
                            id: 'visual',
                            label: 'Visual',
                            info: 'Display-related hardware specifications that affect visual perception.',
                            children: [
                                { id: 'visual-resolution', label: 'Display\nresolution', info: 'Pixel density per eye.' },
                                { id: 'visual-fov', label: 'Field of\nview (FOV)', info: 'The horizontal and vertical viewing angles available in the VR display.' },
                                { id: 'visual-color', label: 'Color gamut\nspecs', info: 'Color accuracy, gamut coverage, and display color space.' },
                                { id: 'visual-nature', label: 'Standalone\ntethered', info: 'Whether the headset is wireless/standalone or tethered.' },
                                { id: 'visual-latency', label: 'Latency', info: 'End-to-end motion-to-photon latency affecting motion sickness.' }
                            ]
                        },
                        {
                            id: 'audio',
                            label: 'Audio',
                            info: 'Sound delivery hardware affecting auditory perception in VR.',
                            children: [
                                { id: 'audio-type', label: 'Speaker\ntype', info: 'Built-in speakers, headphones, bone conduction, or spatial audio system.' },
                                { id: 'audio-placement', label: 'Placement', info: 'Speaker location relative to the head (e.g., near ears, front-facing).' },
                                { id: 'audio-quality', label: 'Quality\nspecs', info: 'Frequency response, distortion levels, and audio fidelity.' },
                                { id: 'audio-intensity', label: 'Intensity', info: 'Intensity or strength of audio feedback.' },
                                { id: 'audio-latency', label: 'Latency', info: 'Audio delay relative to visual and interaction events.' }
                            ]
                        },
                        {
                            id: 'olfactory',
                            label: 'Olfactory',
                            info: 'Scent delivery hardware when present in VR systems.',
                            children: [
                                { id: 'olfactory-type', label: 'Emitter\ntype', info: 'Scent diffusion technology (e.g., microfluidic, ultrasonic).' },
                                { id: 'olfactory-location', label: 'Location', info: 'Where the scent is delivered relative to the user.' },
                                { id: 'olfactory-intensity', label: 'Intensity', info: 'Intensity or strength of olfactory feedback.' },
                                { id: 'olfactory-latency', label: 'Latency', info: 'Delay between stimulus event and scent delivery.' }
                            ]
                        },
                        {
                            id: 'thermal',
                            label: 'Thermal',
                            info: 'Temperature-based feedback hardware in VR systems.',
                            children: [
                                { id: 'thermal-type', label: 'Device\ntype', info: 'Thermal feedback technology (e.g., IR lamps, peltier element, liquid-based heating/cooling).' },
                                { id: 'thermal-location', label: 'Device\nlocation', info: 'Which body part receives thermal feedback (hands, face, torso).' },
                                { id: 'thermal-intensity', label: 'Intensity', info: 'Intensity or strength of thermal feedback.' },
                                { id: 'thermal-latency', label: 'Latency', info: 'Response time from stimulus to temperature change.' }
                            ]
                        },
                        {
                            id: 'haptic',
                            label: 'Haptic',
                            info: 'Touch and force-feedback hardware in VR controllers and devices.',
                            children: [
                                { id: 'haptic-type', label: 'Device\ntype', info: 'Vibration, electrotactile, pressure, or motion-based haptics.' },
                                { id: 'haptic-location', label: 'Location', info: 'Which body part receives haptic feedback (hands, face, torso).' },
                                { id: 'haptic-intensity', label: 'Intensity', info: 'Intensity or strength of haptic feedback.' },
                                { id: 'haptic-latency', label: 'Latency', info: 'Delay between interaction and haptic response.' }
                            ]
                        }
                    ]
                },
                {
                    id: 'environment-conditions',
                    label: 'Environment\nConditions',
                    info: 'Physical room and environmental conditions where VR is experienced.',
                    children: [
                        { id: 'env-room-type', label: 'Room type', info: 'Type of physical space (lab, home, CAVE, arena-scale).' },
                        { id: 'env-room-size', label: 'Room size/\nlayout', info: 'Dimensions and layout of the physical space available for VR.' },
                        { id: 'env-noise', label: 'Ambient\nnoise level', info: 'Background noise in decibels affecting audio immersion.' },
                        { id: 'env-temperature', label: 'Room\ntemperature', info: 'Ambient temperature affecting comfort and thermal sensitivity.' },
                        { id: 'env-lighting', label: 'Lighting\nconditions', info: 'Ambient lighting in the physical space (dark, bright, natural).' },
                        { id: 'env-air-quality', label: 'Air quality/\nhumidity', info: 'Humidity and air quality affecting comfort and immersion.' },
                        { id: 'env-experimenter', label: 'Experimenter\npresence', info: 'Whether study personnel are present or observing during VR.' },
                        { id: 'env-observers', label: 'Number of\nobservers', info: 'How many people are observing or present during the session.' }
                    ]
                },
                {
                    id: 'software',
                    label: 'Software',
                    info: 'Virtual content, scene design, and task structure in VR applications.',
                    children: [
                        {
                            id: 'rendering-physics',
                            label: 'Rendering &\nPhysics',
                            info: 'Graphics engine settings and physics simulation.',
                            children: [
                                { id: 'render-quality', label: 'Graphics\nrendering\nquality', info: 'Texture quality, lighting, shadows, and visual effects fidelity.' },
                                { id: 'render-physics', label: 'Physics\nsimulation', info: 'Accuracy and complexity of physics simulation (gravity, collisions).' },
                                { id: 'render-realism', label: 'Scene\nrealism level', info: 'Photorealism vs. stylized graphics and world fidelity.' },
                                { id: 'render-complexity', label: 'Scene\ncomplexity', info: 'Number of objects, polygons, and visual elements.' },
                                { id: 'render-feedback', label: 'Feedback\nconsistency', info: 'Consistency between user actions and environmental responses.' },
                                { id: 'render-framerate', label: 'Frame rate\nstability', info: 'Consistency of frame rate and absence of stuttering.' }
                            ]
                        },
                        {
                            id: 'stimulus-design',
                            label: 'Stimulus\nDesign',
                            info: 'Virtual stimuli presented to the user.',
                            children: [
                                {
                                    id: 'stimulus-properties',
                                    label: 'Stimulus\nProperties',
                                    info: 'Characteristics of individual stimuli presented in VR.',
                                    children: [
                                        { id: 'stim-type', label: 'Type', info: 'Category of stimulus (visual, auditory, tactile, multi-sensory, etc.).' },
                                        { id: 'stim-valence', label: 'Valence', info: 'Emotional valence of stimulus (positive, negative, neutral).' },
                                        { id: 'stim-intensity', label: 'Intensity', info: 'Strength or salience of the stimulus.' },
                                        { id: 'stim-novelty', label: 'Novelty', info: 'How new or unexpected the stimulus is.' },
                                        { id: 'stim-duration', label: 'Duration', info: 'How long the stimulus is presented.' },
                                        { id: 'stim-location', label: 'Location', info: 'Spatial location of stimulus in the virtual environment.' },
                                        { id: 'stim-timing', label: 'Timing', info: 'When the stimulus is presented relative to other events.' }
                                    ]
                                },
                                {
                                    id: 'modality-delivery',
                                    label: 'Modality\nDelivery',
                                    info: 'How stimuli are delivered across different sensory modalities.',
                                    children: [
                                        { id: 'mod-visual', label: 'Visual', info: 'Present/absent, quality.' },
                                        { id: 'mod-audio', label: 'Audio', info: 'Present/absent, quality.' },
                                        { id: 'mod-olfactory', label: 'Olfactory', info: 'Present/absent, concentration.' },
                                        { id: 'mod-thermal', label: 'Thermal', info: 'Present/absent, temperature.' },
                                        { id: 'mod-haptic', label: 'Haptic', info: 'Present/absent, device type, intensity.' },
                                        { id: 'mod-combinations', label: 'Modality\ncombinations', info: 'How multiple sensory modalities are combined.' },
                                        { id: 'mod-sync', label: 'Modality\nsynchronization', info: 'Temporal synchronization between different sensory modalities.' }
                                    ]
                                }
                            ]
                        },
                        {
                            id: 'environment-design',
                            label: 'Environment\nDesign',
                            info: 'Design of the virtual environment and scene context.',
                            children: [
                                { id: 'env-scene-type', label: 'Scene/context\ntype', info: 'Type of virtual environment (market place, laboratory, nature, abstract, etc.).' },
                                { id: 'env-visual-style', label: 'Visual\nstyle', info: 'Photorealism vs. stylized graphics.' },
                                { id: 'env-lighting-cons', label: 'Lighting\nconsistency', info: 'Consistency of lighting across the virtual scene.' },
                                { id: 'env-detail-level', label: 'Environmental\ndetail level', info: 'Amount of environmental detail and clutter.' }
                            ]
                        },
                        {
                            id: 'task-structure',
                            label: 'Task\nStructure',
                            info: 'How the task or interaction is structured for the participant.',
                            children: [
                                { id: 'task-type', label: 'Task type', info: 'Type of task (passive observation, active interaction, etc.).' },
                                { id: 'game-mechanics', label: 'Game\nmechanics', info: 'Rules and interactive systems that structure play (e.g., goals/objectives, scoring, rewards/penalties, levels, time pressure, and win/loss conditions).' },
                                { id: 'task-perspective', label: 'Viewpoint\nperspective', info: 'Reference frame of experience (egocentric/first-person vs exocentric/third-person).' },
                                { id: 'task-duration', label: 'Trial\nduration', info: 'How long each individual trial or task block lasts.' },
                                { id: 'task-interval', label: 'Inter-stimulus\ninterval', info: 'Time between stimulus presentations.' },
                                { id: 'task-session', label: 'Total session\nduration', info: 'Total length of the entire VR session.' },
                                { id: 'task-repetitions', label: 'Number of\nrepetitions', info: 'How many times stimuli or task blocks are repeated.' },
                                { id: 'task-randomization', label: 'Stimulus\nrandomization', info: 'Whether and how stimulus order is randomized.' }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            id: 'internal-factors',
            label: 'Internal Factors',
            info: 'Individual characteristics and states of the person experiencing VR.',
            children: [
                {
                    id: 'stable-traits',
                    label: 'Stable Traits',
                    info: 'Relatively enduring characteristics of a person that remain consistent over time.',
                    children: [
                        {
                            id: 'psychological-traits',
                            label: 'Psychological\nTraits',
                            info: 'Personality and psychological characteristics affecting VR responses.',
                            children: [
                                {
                                    id: 'big-five',
                                    label: 'Big Five\nPersonality',
                                    info: 'The five major personality factors: openness, conscientiousness, extraversion, agreeableness, neuroticism; which affect valuation of stimuli.',
                                    children: [
                                        { id: 'openness', label: 'Openness', info: 'Tendency to be open to new experiences and ideas.' },
                                        { id: 'conscientiousness', label: 'Conscientiousness', info: 'Tendency to be organized, careful, and responsible.' },
                                        { id: 'extraversion', label: 'Extraversion', info: 'Tendency to be outgoing, social, and seek stimulation.' },
                                        { id: 'agreeableness', label: 'Agreeableness', info: 'Tendency to be cooperative, compassionate, and empathetic.' },
                                        { id: 'neuroticism', label: 'Neuroticism', info: 'Tendency to experience negative emotions like anxiety and sadness.' }
                                    ]
                                },
                                { id: 'player-traits', label: 'Player\ntraits', info: 'Stable game-related dispositions (e.g., preference for challenge, exploration, competition, and achievement).' },
                                { id: 'locus-control', label: 'Locus of\ncontrol', info: 'Belief about whether events are controlled internally (self) or externally (others/fate).' },
                                { id: 'empathy', label: 'Empathy\ntrait', info: 'Dispositional tendency to understand and share others\' emotional experiences.' },
                            ]
                        },
                        {
                            id: 'cognitive-abilities',
                            label: 'Cognitive\nAbilities',
                            info: 'Mental capabilities affecting information processing in VR.',
                            children: [
                                { id: 'executive-function', label: 'Executive\ncontrol', info: 'Capacity to plan, inhibit, switch, and regulate goal-directed behavior.' },
                                { id: 'working-memory', label: 'Working\nmemory\ncapacity', info: 'Capacity to temporarily hold and manipulate information.' },
                                { id: 'spatial-ability', label: 'Spatial\nability', info: 'Capacity to mentally transform and navigate 3D spatial information.' },
                                { id: 'cognitive-load', label: 'Attentional\ncapacity', info: 'Available attentional resources before task demands cause overload.' }
                            ]
                        },
                        {
                            id: 'vr-specific-traits',
                            label: 'VR-Specific\nTraits',
                            info: 'Individual traits specifically relevant to VR experiences.',
                            children: [
                                { id: 'immersive-tendency', label: 'Immersive\ntendency', info: 'Natural tendency to become immersed in virtual environments.' },
                                { id: 'absorption', label: 'Absorption', info: 'Trait-like tendency for deep attentional involvement and reduced awareness of the external world.' },
                                { id: 'dissociation', label: 'Dissociation', info: 'Trait-like tendency toward detachment from immediate experience or reduced integration of perception/self.' },
                                { id: 'sickness-susceptibility', label: 'Simulator\nsickness\nsusceptibility', info: 'Susceptibility to motion sickness and discomfort in VR.' },
                                { id: 'vr-experience', label: 'Prior VR/gaming\nexperience', info: 'Amount and type of previous experience with VR or video games.' }
                            ]
                        },
                        {
                            id: 'physical-traits',
                            label: 'Physical Traits',
                            info: 'Physical sensory and motor characteristics of the person.',
                            children: [
                                { id: 'visual-acuity', label: 'Visual\nacuity', info: 'Sharpness and clarity of vision.' },
                                { id: 'binocular-vision', label: 'Binocular\nvision', info: 'Ability to use both eyes together for depth perception.' },
                                { id: 'color-vision', label: 'Color\nvision', info: 'Ability to perceive and distinguish colors accurately.' },
                                { id: 'hearing-acuity', label: 'Hearing\nacuity', info: 'Sensitivity and range of hearing across frequencies.' },
                                { id: 'olfactory-sensitivity', label: 'Olfactory\nsensitivity', info: 'Sensitivity to smell and odor detection ability.' },
                                { id: 'thermal-sensitivity', label: 'Thermal\nsensitivity', info: 'Sensitivity to temperature changes and thermal stimulation.' },
                                { id: 'motor-control', label: 'Motor\ncontrol', info: 'Ability to control and coordinate body movements.' },
                                { id: 'vestibular-system', label: 'Vestibular\nsystem', info: 'Inner ear system responsible for balance and spatial orientation.' }
                            ]
                        },
                        {
                            id: 'demographics',
                            label: 'Demographics',
                            info: 'Basic demographic characteristics of the participant.',
                            children: [
                                { id: 'age', label: 'Age', info: 'Age of the participant.' },
                                { id: 'gender', label: 'Gender', info: 'Gender identity of the participant.' },
                                { id: 'cultural-background', label: 'Cultural\nbackground', info: 'Cultural and ethnic background of the participant.' },
                                { id: 'education-level', label: 'Education\nlevel', info: 'Level of formal education completed.' },
                                { id: 'ses', label: 'SES', info: 'Socioeconomic status including income and education.' }
                            ]
                        }
                    ]
                },
                {
                    id: 'dynamic-states',
                    label: 'Dynamic States',
                    info: 'Changeable mental and physical states that vary from session to session.',
                    children: [
                        {
                            id: 'pre-study-mental',
                            label: 'Pre-Study\nMental State',
                            info: 'Mental and physical state of the participant before the VR session.',
                            children: [
                                { id: 'pre-mood', label: 'Mood', info: 'Emotional state and mood before the study.' },
                                { id: 'pre-stress', label: 'Stress level', info: 'Level of psychological stress or tension.' },
                                { id: 'pre-sleep', label: 'Sleep\nquality', info: 'Sleep quality and amount in recent nights.' },
                                { id: 'pre-caffeine', label: 'Caffeine\nintake', info: 'Recent caffeine consumption affecting arousal.' },
                                { id: 'pre-exercise', label: 'Recent\nexercise', info: 'Physical exercise done recently before the session.' },
                                { id: 'pre-hunger', label: 'Hunger\nlevel', info: 'Hunger and nutritional state before the study.' },
                                { id: 'pre-pain', label: 'Pain/\nillness', info: 'Any physical pain, illness, or discomfort present.' },
                                { id: 'pre-expectations', label: 'Expectations', info: 'Expectations about what will happen in the VR study.' }
                            ]
                        },
                        {
                            id: 'during-study-mental',
                            label: 'During-Study\nMental State',
                            info: 'Mental states and experiences occurring during the VR session.',
                            children: [
                                {
                                    id: 'psychological-activation',
                                    label: 'Psychological\nActivation',
                                    info: 'Level of psychological arousal and emotional activation.',
                                    children: [
                                        { id: 'arousal', label: 'Arousal\nlevel', info: 'Level of physiological and psychological arousal.' },
                                        { id: 'valence', label: 'Valence', info: 'Emotional valence (positive to negative feelings).' },
                                        { id: 'emotional-intensity', label: 'Emotional\nintensity', info: 'Intensity or strength of emotional experience.' },
                                        { id: 'cognitive-load-state', label: 'Cognitive\nload', info: 'Current cognitive load and mental effort during the task.' }
                                    ]
                                },
                                {
                                    id: 'vr-experience-quality',
                                    label: 'VR Experience\nQuality',
                                    info: 'Quality of the immersive experience and sense of presence.',
                                    children: [
                                        { id: 'presence', label: 'Sense of\nPresence', info: 'Subjective sense of "being there" in the virtual environment.' },
                                        { id: 'embodiment', label: 'Embodiment', info: 'Sense of owning and controlling a virtual body.' },
                                        { id: 'copresence', label: 'Copresence', info: 'Sense of being together with others in the virtual environment.' },
                                        { id: 'immersion', label: 'Immersion', info: 'Objective level of sensory fidelity and system immersion (relies heavily on hardware and software quality inside internal factors).' },
                                        { id: 'reality-judgment', label: 'Reality\njudgment', info: 'Judgment of how real the virtual experience seems.' },
                                        { id: 'flow', label: 'Flow', info: 'State of optimal engagement where challenge matches skill.' }
                                    ]
                                },
                                {
                                    id: 'motivational-state',
                                    label: 'Motivational\nState',
                                    info: 'Motivation and goal-related states during the task.',
                                    children: [
                                        { id: 'goal-clarity', label: 'Goal\nclarity', info: 'Clarity and understanding of task goals.' },
                                        { id: 'agency-control', label: 'Agency/\nControl', info: 'Sense of personal agency and control over events.' },
                                        { id: 'intrinsic-motivation', label: 'Intrinsic\nmotivation', info: 'Internal motivation driven by interest and enjoyment.' },
                                        { id: 'attention-focus', label: 'Attention\nfocus', info: 'Direction and intensity of attention during the task.' },
                                        { id: 'approach-avoidance', label: 'Approach-Avoidance', info: 'The tendency to approach or avoid stimuli based on their valence and properties.' },

                                    ]
                                }
                            ]
                        },
                        {
                            id: 'psychopathology',
                            label: 'Psychopathology\nScreening',
                            info: 'Screening for mental health conditions that might affect VR responses.',
                            children: [
                                { id: 'ptsd-history', label: 'Trauma/\nPTSD history', info: 'History of trauma or post-traumatic stress disorder.' },
                                { id: 'anxiety-disorders', label: 'Anxiety\ndisorders', info: 'Current or history of diagnosed anxiety disorders.' },
                                { id: 'motion-sickness', label: 'Motion\nsickness\nhistory', info: 'History of motion sickness or vestibular sensitivity.' },
                                { id: 'panic-disorder', label: 'Panic\ndisorder risk', info: 'Risk or history of panic disorder in VR contexts.' },
                            ]
                        }
                    ]
                }
            ]
        }
    ]
};
