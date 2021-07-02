import img1 from '../../assets/image/card_img-1.jpg'
import img2 from '../../assets/image/card_img-2.jpg'
import img3 from '../../assets/image/card_img-3.jpg'

const TOUR_CARD_DATA = [
    {
        id: 1,
        image:`${img1}`,
        heading:'the sea explorer',
        details: {
            line1:'3 day tour',
            line2:'Upto 30 people',
            line3:'2 tour guilds',
            line4:'sleep in cozy hotel',
            line5:'Difficulty: very easy'
        },
    },
    {
        id: 2,
        image:`${img2}`,
        heading:'the forest hiker',
        details: {
            line1:'7 day tour',
            line2:'Upto 40 people',
            line3:'6 tour guilds',
            line4:'sleep in provided tents',
            line5:'Difficulty: medium'
        },
    },
    {
        id: 3,
        image:`${img3}`,
        heading:'the snow adventure',
        details: {
            line1:'5 day tour',
            line2:'Upto 15 people',
            line3:'3 tour guilds',
            line4:'sleep in provided tents',
            line5:'Difficulty: hard'
        },
    },
];

export default TOUR_CARD_DATA;