import {FaCode, FaMobileAlt, FaPaintBrush, FaUser} from "react-icons/fa";

import emzaCafe from '../assets/images/emzaCafe.jpeg'
import profile2 from '../assets/images/profile-3.jpeg'
import profile3 from '../assets/images/profile-4.jpeg'
import profile4 from '../assets/images/profile-5.jpeg'
import fiat from '../assets/images/logoGold.png'
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
        icon: <FaMobileAlt/>
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
        name: 'Emza Cafe',
        description: 'خرید و سفارش آنلاین قهوه و انواع محصولات مربوطه',
        image: emzaCafe,
        link: "https://emza-group.ir/",
        path: "/project/emza-cafe"
    }, {
        id: 1,
        name: 'Salmode',
        description: 'سفارش آنلاین انواع پوشاک',
        image: profile2,
        link: null,
        path: "/project/"
    }, {
        id: 2,
        name: 'Portfolio',
        description: 'سایت شخصی برای معرفی شخص',
        image: profile3,
        link: null,
        path: "/project/"
    }, {
        id: 3,
        name: 'Money Exchange',
        description: 'صرافی ثانیه (استرالیا)',
        image: fiat,
        link: "https://www.sanieh.com.au/",
        path: "/project/"
    },
]
export const myServices = [
    {
        id: 0,
        title: 'Web Design',
        description: 'تبدیل سایت شما از قالب فیگما به خروجی React',
        icon: <FaPaintBrush className='icon'/>
    },
    {
        id: 1,
        title: 'Optimized for Any Device',
        description: 'ارائه سایت به شکلی کاملا ریسپانسیو',
        icon: <FaCode className='icon'/>
    },
    {
        id: 2,
        title: 'Apps Design',
        description: 'ارائه قالب های آماده فروشگاهی، صرافی، پنل های مدیریت ...',
        icon: <FaCode className='icon'/>
    }
]
export const skillsList = [
    {
        id: 0,
        title: 'HTML',
        percent: 85
    }, {
        id: 1,
        title: 'CSS',
        percent: 80
    }, {
        id: 2,
        title: 'JavaScript',
        percent: 80
    }, {
        id: 3,
        title: 'ReactJS',
        percent: 80
    }, {
        id: 4,
        title: 'NextJS',
        percent: 70
    }, {
        id: 5,
        title: 'TypeScript',
        percent: 70
    }, {
        id: 6,
        title: 'TailWind',
        percent: 50
    }, {
        id: 7,
        title: 'Git',
        percent: 60
    }, {
        id: 8,
        title: 'NodeJS(express)',
        percent: 68
    }]