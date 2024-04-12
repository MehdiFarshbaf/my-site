import {FaCode, FaMobileAlt, FaPaintBrush, FaUser} from "react-icons/fa";

import profile1 from '../assets/images/profile-2.jpeg'
import profile2 from '../assets/images/profile-3.jpeg'
import profile3 from '../assets/images/profile-4.jpeg'
import profile4 from '../assets/images/profile-5.jpeg'
import {IoLocationSharp} from "react-icons/io5";
import {MdEmail} from "react-icons/md";


export const contactInfoList = [
    {
        id: 0,
        label: 'نام:',
        description: 'مهدی فرشباف',
        icon: <FaUser/>
    }, {
        id: 1,
        label: 'موبایل:',
        description: '0903-9067633',
        icon: <FaMobileAlt />
    }, {
        id: 2,
        label: 'ایمیل:',
        description: 'mehdifarshbaf92@mail.com',
        icon: <MdEmail/>
    }
]
export const projectList = [
    {
        id: 0,
        name: 'Mojtaba Hosseini',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, et illo iure neque pariatur perferendis rerum unde!',
        image: profile1
    }, {
        id: 1,
        name: 'Erfan Kakaei',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, et illo iure neque pariatur perferendis rerum unde!',
        image: profile2
    }, {
        id: 2,
        name: 'Ali Ostad',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, et illo iure neque pariatur perferendis rerum unde!',
        image: profile3
    }, {
        id: 3,
        name: 'Mehdi Rajabi',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, et illo iure neque pariatur perferendis rerum unde!',
        image: profile4
    },
]
export const myServices = [
    {
        id: 0,
        title: 'Web Design',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, odio?',
        icon: <FaPaintBrush className='icon'/>
    },
    {
        id: 1,
        title: 'Advertising',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, odio?',
        icon: <FaCode className='icon'/>
    },
    {
        id: 2,
        title: 'Apps Design',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, odio?',
        icon: <FaCode className='icon'/>
    }
]
export const skillsList = [
    {
        id: 0,
        title: 'HTML',
        percent: 90
    }, {
        id: 1,
        title: 'CSS',
        percent: 60
    }, {
        id: 2,
        title: 'JavaScript',
        percent: 80
    }, {
        id: 3,
        title: 'PHP',
        percent: 50
    }, {
        id: 4,
        title: 'MySQL',
        percent: 70
    }]