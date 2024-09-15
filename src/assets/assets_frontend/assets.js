import appointment_img from './appointment_img.png'
import header_img from './header_img.png'
import group_profiles from './group_profiles.png'
import profile_pic from './profile_pic.png'
import contact_image from './contact_image.png'
import about_image from './about_image.png'
import logo from './logo.svg'
import dropdown_icon from './dropdown_icon.svg'
import menu_icon from './menu_icon.svg'
import cross_icon from './cross_icon.png'
import chats_icon from './chats_icon.svg'
import verified_icon from './verified_icon.svg'
import arrow_icon from './arrow_icon.svg'
import info_icon from './info_icon.svg'
import upload_icon from './upload_icon.png'
import stripe_logo from './stripe_logo.png'
import razorpay_logo from './razorpay_logo.png'
import doc1 from './doc1.png'
import doc2 from './doc2.png'
import doc3 from './doc3.png'
import doc4 from './doc4.png'
import doc5 from './doc5.png'
import doc6 from './doc6.png'
import doc7 from './doc7.png'
import doc8 from './doc8.png'
import doc9 from './doc9.png'
import doc10 from './doc10.png'
import doc11 from './doc11.png'
import doc12 from './doc12.png'
import doc13 from './doc13.png'
import doc14 from './doc14.png'
import doc15 from './doc15.png'
import Dermatologist from './Dermatologist.svg'
import Gastroenterologist from './Gastroenterologist.svg'
import General_physician from './General_physician.svg'
import Gynecologist from './Gynecologist.svg'
import Neurologist from './Neurologist.svg'
import Pediatricians from './Pediatricians.svg'


export const assets = {
    appointment_img,
    header_img,
    group_profiles,
    logo,
    chats_icon,
    verified_icon,
    info_icon,
    profile_pic,
    arrow_icon,
    contact_image,
    about_image,
    menu_icon,
    cross_icon,
    dropdown_icon,
    upload_icon,
    stripe_logo,
    razorpay_logo
}

export const specialityData = [
    {
        speciality: 'General physician',
        image: General_physician
    },
    {
        speciality: 'Gynecologist',
        image: Gynecologist
    },
    {
        speciality: 'Dermatologist',
        image: Dermatologist
    },
    {
        speciality: 'Pediatricians',
        image: Pediatricians
    },
    {
        speciality: 'Neurologist',
        image: Neurologist
    },
    {
        speciality: 'Gastroenterologist',
        image: Gastroenterologist
    },
]

export const doctors = [
    {
        _id: 'doc1',
        name: 'Dr. Rameshwar Sinha',
        image: doc1,
        speciality: 'General physician',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 50,
        address: {
            line1: '17th Cross, Koramangala',
            line2: 'Ring Road, Bangalore, Karnataka'
        }
    },
    {
        _id: 'doc2',
        name: 'Dr. Nandini Sharma',
        image: doc2,
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '3 Years',
        about: 'Dr. Nandini Sharma has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 60,
        address: {
            line1: '27th Cross, Lajpat Nagar',
            line2: 'Ring Road, Delhi'
        }
    },
    {
        _id: 'doc3',
        name: 'Dr. Arjun Patel',
        image: doc3,
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '1 Years',
        about: 'Dr. Arjun Patel has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 30,
        address: {
            line1: '37th Cross, Andheri West',
            line2: 'Mumbai, Maharashtra'
        }
    },
    {
        _id: 'doc4',
        name: 'Dr. Vikas Gupta',
        image: doc4,
        speciality: 'Pediatrician',
        degree: 'MBBS',
        experience: '2 Years',
        about: 'Dr. Vikas Gupta has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 40,
        address: {
            line1: '47th Cross, Gachibowli',
            line2: 'Ring Road, Hyderabad, Telangana'
        }
    },
    {
        _id: 'doc5',
        name: 'Dr. Priya Iyer',
        image: doc5,
        speciality: 'Neurologist',
        degree: 'MBBS MD',
        experience: '4 Years',
        about: 'Dr. Priya Iyer has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 50,
        address: {
            line1: '57th Cross, Jubilee Hills',
            line2: 'Ring Road, Hyderabad, Telangana'
        }
    },
    {
        _id: 'doc6',
        name: 'Dr. Rahul Deshmukh',
        image: doc6,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Rahul Deshmukh has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 50,
        address: {
            line1: '67th Cross, Hinjewadi',
            line2: 'Pune, Maharashtra'
        }
    },
    {
        _id: 'doc7',
        name: 'Dr. Sanjay Rao',
        image: doc7,
        speciality: 'General physician',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Sanjay Rao has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 50,
        address: {
            line1: '17th Cross, BTM Layout',
            line2: 'Ring Road, Bangalore, Karnataka'
        }
    },
    {
        _id: 'doc8',
        name: 'Dr. Shreyas Nair',
        image: doc8,
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '3 Years',
        about: 'Dr. Shreyas Nair has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 60,
        address: {
            line1: '27th Cross, Vasant Kunj',
            line2: 'Delhi'
        }
    },
    {
        _id: 'doc9',
        name: 'Dr. Rohini Khanna',
        image: doc9,
        speciality: 'Dermatologist',
        degree: 'MBBS ENT',
        experience: '1 Years',
        about: 'Dr. Rohini Khanna has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 30,
        address: {
            line1: '37th Cross, Mulund West',
            line2: 'Mumbai, Maharashtra'
        }
    },
    {
        _id: 'doc10',
        name: 'Dr. Nikhil Agrawal',
        image: doc10,
        speciality: 'Pediatrician',
        degree: 'MBBS',
        experience: '2 Years',
        about: 'Dr. Nikhil Agrawal has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 40,
        address: {
            line1: '47th Cross, Jayanagar',
            line2: 'Ring Road, Bangalore, Karnataka'
        }
    },
    {
        _id: 'doc11',
        name: 'Dr. Meera Verma',
        image: doc11,
        speciality: 'Gastroenterologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Meera Verma has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 50,
        address: {
            line1: '57th Cross, MG Road',
            line2: 'Pune, Maharashtra'
        }
    },
    {
        _id: 'doc12',
        name: 'Dr. Suresh Menon',
        image: doc12,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Suresh Menon has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 50,
        address: {
            line1: '67th Cross, Whitefield',
            line2: 'Ring Road, Bangalore, Karnataka'
        }
    },
    {
        _id: 'doc13',
        name: 'Dr. Deepa Kapoor',
        image: doc13,
        speciality: 'General physician',
        degree: 'MBBS MD',
        experience: '4 Years',
        about: 'Dr. Deepa Kapoor has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 50,
        address: {
            line1: '17th Cross, Indiranagar',
            line2: 'Ring Road, Bangalore, Karnataka'
        }
    },
    {
        _id: 'doc14',
        name: 'Dr. Anil Choudhary',
        image: doc14,
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '3 Years',
        about: 'Dr. Anil Choudhary has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 60,
        address: {
            line1: '27th Cross, South City',
            line2: 'Delhi'
        }
    },
    {
        _id: 'doc15',
        name: 'Dr. Anjali Joshi',
        image: doc15,
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '1 Years',
        about: 'Dr. Anjali Joshi has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 30,
        address: {
            line1: '37th Cross, Baner',
            line2: 'Pune, Maharashtra'
        }
    },
    
]