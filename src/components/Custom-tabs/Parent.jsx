

import { Typography } from '@mui/material'
import {Tabs as Tabcontent} from './App'


export const Parent=()=>{
    
    const tabs = [
        {
            label: 'Mobile App Development',
            contents: (
                <>
                    <Typography variant="h4">Mobile App Development</Typography>
                    <Typography variant="body1">
                        We specialize in creating mobile applications that deliver seamless and engaging user experiences across both iOS and Android platforms. Our development team focuses on:
                        <br /><br />
                        <strong>User-Centric Design:</strong> Crafting intuitive and visually appealing interfaces that ensure ease of use and enhance user satisfaction.
                        <br /><br />
                        <strong>Cross-Platform Compatibility:</strong> Building apps that perform flawlessly on both iOS and Android, ensuring a consistent experience for all users.
                        <br /><br />
                        <strong>Feature-Rich Functionality:</strong> Integrating cutting-edge features that enhance usability and keep users coming back.
                        <br /><br />
                        <strong>Performance Optimization:</strong> Ensuring your app runs smoothly, with fast load times and efficient resource usage to provide a top-notch experience.
                        <br /><br />
                        <strong>Security and Compliance:</strong> Implementing robust security measures to protect user data and ensure compliance with industry standards and regulations.
                        <br /><br />
                        <strong>Ongoing Support and Maintenance:</strong> Providing continuous support and updates to keep your app running optimally and adapting to new technologies and user needs.
                        <br /><br />
                        <strong>Custom Solutions:</strong> Tailoring every aspect of the app to meet your specific business goals and user expectations.
                        <br /><br />
                        Our team is committed to delivering high-quality, innovative mobile apps that not only meet your technical requirements but also drive user engagement and business growth.
                    </Typography>
                </>
            )
        },
        {
            label: 'Graphic Design',
            contents: (
                <>
                    <Typography variant="h4">Graphic Design</Typography>
                    <Typography variant="body1">
                        Our graphic design team creates visually stunning and effective designs that elevate your brand's identity. We specialize in a wide range of design services, including:
                        <br /><br />
                        <strong>Logo Design:</strong> Crafting memorable and impactful logos that embody the essence of your brand.
                        <br /><br />
                        <strong>Brand Identity:</strong> Developing cohesive visual identities that resonate with your target audience and set you apart from the competition.
                        <br /><br />
                        <strong>Print Design:</strong> Designing eye-catching brochures, business cards, posters, and other print materials that communicate your message clearly and effectively.
                        <br /><br />
                        <strong>Digital Graphics:</strong> Creating engaging graphics for websites, social media, and digital marketing campaigns to ensure your online presence is as compelling as your offline materials.
                        <br /><br />
                        <strong>Packaging Design:</strong> Designing packaging that not only protects your products but also enhances their appeal on the shelf and creates a memorable unboxing experience.
                        <br /><br />
                        Our approach is collaborative, working closely with you to understand your vision and goals. Whether you're launching a new brand or refreshing an existing one, we ensure that every design element is aligned with your strategic objectives, creating a strong and consistent brand presence across all platforms.
                    </Typography>
                </>
            )
        },
        {
            label: 'Web Development',
            contents: (
                <>
                    <Typography variant="h4"  >Web Development</Typography>
                    <Typography variant="body1">
                        Our web development services offer cutting-edge solutions for building responsive, scalable, and high-performing websites. Whether you need a simple, elegant website or a complex web application, our team of experienced developers is equipped to deliver a product that meets your specific needs and exceeds your expectations.
                        <br /><br />
                        <strong >Responsive Design:</strong> Creating websites that provide an optimal viewing experience across all devices, ensuring your site looks great and functions flawlessly on desktops, tablets, and smartphones.
                        <br /><br />
                        <strong>Scalable Architecture:</strong> Developing websites with a robust foundation that can grow with your business, handling increased traffic and expanded functionality as your needs evolve.
                        <br /><br />
                        <strong>Custom Web Applications:</strong> Building tailored web applications that solve unique business challenges, from e-commerce platforms to content management systems and beyond.
                        <br /><br />
                        <strong>SEO Optimization:</strong> Implementing best practices for search engine optimization to improve your website’s visibility and ranking on search engines, driving more traffic to your site.
                        <br /><br />
                        <strong>Performance and Speed:</strong> Ensuring fast load times and smooth performance, creating a seamless experience for users and improving your site's search engine rankings.
                        <br /><br />
                        <strong>Security and Compliance:</strong> Prioritizing the security of your website with the latest encryption and protection measures, ensuring compliance with industry standards and safeguarding user data.
                        
                    </Typography>
                </>
            )
        }
        
    ];
    
   return< Tabcontent content={tabs}  />


}
















// import { Tabs as TabsComponent } from "./App"; 

// function Random(){
//     return <h1>Return some random content</h1>
// }

// export const Parent = () => {

//     const tabs = [
//         {
//             label: 'tab1',
//             content: <div>This is content for tab 1</div>
//         },
//         {
//             label: 'tab2',
//             content: <div>This is content for tab 2</div>
//         },
//         {
//             label: 'tab3',
//             content: <Random />
//         }
//     ];

//     function handleTabChange(currentTabIndex) {
//         console.log(currentTabIndex);
//     }

//     return <TabsComponent content={tabs} onChange={handleTabChange} />;
// };
