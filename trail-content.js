// ============================================================
// SCOTSWOOD GARDEN SENSORY TRAIL – EDITABLE CONTENT
// ============================================================
// This is the main file garden staff can edit in future.
// You can change titles, introductions, activity text, journal
// prompts and icons here without changing the technical app code.
//
// IMPORTANT:
// - Keep quotation marks and commas in place.
// - Text between single quotes can be changed.
// - If you need an apostrophe inside single-quoted text, use a
//   curly apostrophe (’) as used throughout this file.
// - Do not rename properties such as title, icon, sections, journal.
// - Make a backup before editing.
// ============================================================

const stops = [
  {
    title: 'The Orchard Path', icon: '🍃', kicker: 'Look closely',
    intro: 'This long path is filled with a variety of plants and trees. Slow down as you walk and notice the plants on either side.',
    sections: [
      {label:'👁️ 🤚 Look closely at the leaves', text:'How many different kinds can you find? Notice their shape, size, colour, pattern and texture.', bullets:['A leaf smaller than your thumb','One bigger than your hand','The darkest and lightest greens','A leaf with an unusual edge','Two leaves that feel completely different']},
      {label:'👁️ What else can you see?', text:'Are any flowers blooming? Can you spot a bee, butterfly or another pollinator? Look for the apple, pear and plum trees. What stage are they at today — blossom, developing fruit, ripe fruit, bare branches or somewhere in between?'}
    ],
    journal:['What was the most interesting leaf you found?','What else did you notice along the path?'],
    noteHint:'Describe what caught your attention, or anything else you want to remember.'
  },
  {
    title: 'The Chamomile Lawn', icon: '🌱', kicker: 'Feel & notice',
    intro: 'Take some time to explore the chamomile lawn.',
    sections: [
      {label:'🤚 Feel', text:'If it is comfortable and safe for you, gently touch the chamomile. How would you describe it?', chips:'soft · springy · tickly · cool · warm · damp · dry'},
      {label:'👁️ Look closely', text:"Find the old bird's nest. Look at how it has been made. What materials can you see?"},
      {label:'🧠 Think', text:"Birds aren't the only animals that make their homes in the garden. Can you see anywhere nearby that might make a good home for an animal?"}
    ],
    journal:['How did the chamomile feel?','What did you notice about the bird’s nest?','Did you spot somewhere else an animal might live?'],
    noteHint:'Add anything you would like to remember from this stop.', mindful:true
  },
  {
    title: 'Look, Listen & Feel', icon: '🪨', kicker: 'Explore texture',
    intro: 'This area is all about exploring different textures and surfaces.',
    sections: [
      {label:'🤚 Feel beneath you', text:'There are different surfaces on the ground here. If it feels comfortable, close your eyes for a moment. Can you sense the differences through your feet, chair or mobility aid?'},
      {label:'🤚 👁️ Explore the sensory board', text:'The sensory board contains natural objects that can be touched, looked at, listened to and smelled. Take your time exploring them. Can you work out what some of them are? Is there a texture you particularly like? Is there one you don’t?'}
    ],
    journal:['What was your favourite texture?','Did anything surprise you?'],
    noteHint:'You might also like to take a close-up photo of an interesting texture.'
  },
  {
    title: 'The Mandala Beds', icon: '🌸', kicker: 'Use your nose',
    intro: 'There is a lot to discover here, so give yourself time to explore. This is a wonderful place to use your nose.',
    sections: [
      {label:'👃 Smell', text:'Gently smell some of the herbs and flowers. If appropriate, gently rub a leaf between your fingers. Does this change or strengthen its smell? Can you find two plants that smell completely different?'},
      {label:'🧠 Remember', text:'Do you recognise any of the smells? Does one remind you of a place, food, person or memory?'}
    ],
    journal:['What was your favourite smell?','Did any scent bring back a memory?'],
    noteHint:'You could photograph the plant it came from.'
  },
  {
    title: 'The Serenity Seat', icon: '🪑', kicker: 'Stop & observe',
    intro: 'Take a moment to sit on the bench. Tucked away amongst the plants, this is a perfect place to stop and observe.',
    sections: [
      {label:'👁️ Sit and watch', text:'Stay still for a little while. Can you spot a bird, bee, butterfly, beetle or another small visitor?'},
      {label:'👁️ Look for colour', text:'Without moving from where you are, how many different colours can you see?'},
      {label:'🧠 Think', text:'Does one colour stand out to you? Does it remind you of anything?'}
    ],
    journal:['What visited while you were sitting?','What colours caught your attention?','What did you notice when you stopped?'],
    noteHint:'There is no need to record anything unless you want to.'
  },
  {
    title: 'The Accessible Garden', icon: '🌿', kicker: 'Growing & moving',
    intro: 'The raised beds are a wonderful place to grow fresh food.',
    sections: [
      {label:'👁️ 🤚 Explore what’s growing', text:'What can you see growing today? Does anything look ready to harvest? Can you find any clues that tell you what season it is?'},
      {label:'👁️ Watch', text:'Find a comfortable spot in the gazebo. Instead of looking closely, look outwards and upwards. Can you see the wind moving the trees? Are the clouds still, drifting slowly or racing across the sky?'},
      {label:'👂 Listen', text:'What can you hear nearby? What can you hear further away? You might hear wind chimes, voices, rustling leaves, insects or birds.'}
    ],
    journal:['What was growing today?','What could you see moving?','What could you hear?'],
    noteHint:'Add anything from this part of the garden that you want to remember.'
  },
  {
    title: 'The Forest Path', icon: '🌳', kicker: 'Notice the change',
    intro: 'This tree-shaded path can feel quite different from the open and paved areas of the garden.',
    sections: [
      {label:'🤚 👃 Notice the change', text:'As you enter the trees, notice how your surroundings change. Does the ground feel different beneath you? Has the temperature changed? What happens to the light? Does the air smell different?'},
      {label:'👁️ Look up', text:'Look into the tree canopy. In summer it may be thick with leaves. In autumn, leaves change colour and fall. In winter and early spring, more light can reach through the bare branches. What does the canopy look like today?'},
      {label:'🤚 Feel a rock', text:'If you can comfortably reach one, touch one of the rocks. Does it feel warmer or cooler than you expected?'},
      {label:'👁️ 🤚 Explore the trees', text:'How many different kinds of bark can you see? If you can comfortably reach them, gently feel their surfaces.', chips:'smooth · rough · ridged · cracked · flaky · mossy'}
    ],
    journal:['What changed when you entered the forest?','Which textures did you notice?'],
    noteHint:'You might like to photograph some of the different bark.'
  },
  {
    title: 'The Bird Hide & Wildflower Meadow', icon: '🐦', kicker: 'Pause & reflect',
    intro: 'Find a comfortable place in the bird hide and stop for a while.',
    sections: [
      {label:'👁️ Look', text:'Look out across the wildflower meadow. What colours can you see today? Can you see anything moving amongst the flowers?'},
      {label:'👂 Listen', text:'Be quiet for a moment. Can you hear birds, insects, wind, leaves or something you can’t identify?'},
      {label:'🧠 Before you leave', text:'Think back to when you first arrived. How do you feel now? Has taking time to slow down, notice and use your senses changed how you feel? Did you notice something today that you might normally have walked straight past?'}
    ],
    journal:['After the trail I feel…','My favourite thing I noticed was…','Something that surprised me was…','Something I might normally have missed was…','If I came back in another season, I think I might notice…'],
    noteHint:'Use this space for any final thoughts about your walk.'
  }
];
