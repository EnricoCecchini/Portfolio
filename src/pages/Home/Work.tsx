import React from 'react'
import WorkItem from '../../components/WorkItem'
import PageTitle from '../../components/PageTitle'

function Work() {
    const experience = [
        {
            title: "Software Engineer",
            company: "Beyonder Solutions",
            date_start: "2023-11",
            date_end: "Current",
            description: "I worked as a Software Engineer, mainly in Full-Stack development, designing and building custom ERP software solutions for clients from scratch.",
            achievements: [
                "Designed and developed multiple ERP solutions to optimize business operations.",
                "Conducted requirement analysis to ensure the project proposals meet client's needs.",
                "Designed wireframes for stakeholder review and approval.",
                "Delivered monthly progress reports for clients.",
                "Collaborated with cross-functional teams to align business objectivess and improve operational efficiency.",
                "Created personalized landing pages to increase client exposure.",
                "Implemented new features and mantainance for our proprietary framework.",
                "Developed and maintained internal tools, such as our Log Server."
            ],
            tech_stack: [
                "Python", "MySQL", "FastAPI", "Quasar", "Nicegui", "Relational Database", "Database Design", "UI Design"
            ]
        },
        {
            title: "Data Engineer",
            company: "Crystal Systems",
            date_start: "2022-07",
            date_end: "2023-10",
            description: "I worked as a Data Engineer and Full-Stack Developer, and recieved training in multiple technologies.",
            achievements: [
                "Worked as a Front-End developer to implement new features in a client's Angular based web app.",
                "Collaborated with others to create a friendly/positive work environment.",
                "Received training in SAP, PowerBI, SQL and RPA technologies."
            ],
            tech_stack: [
                "SAP", "SQL", "PowerBI", "RPA (UiPath)", "Angular", "NGRX"
            ]
        },
        {
            title: "Software Engineer (Intern)",
            company: "Arca Continental",
            date_start: "2022-12",
            date_end: "2023-05",
            description: "I created my college thesis in collaboration with Arca Continental, succesfully designing and building a 3D warehouse visualization system to reduce inventory loading times.",
            achievements: [
                "Designed, implemented and managed the MySQL database.",
                "Designed wireframes for the application and implemented them using Svelte.",
                "Built a custom REST API using Flask.",
                "Designed and implemented a 3D visualization system for warehouse inventory using Svelte and ThreeJS.",
                "Implemented features to allow users to design and use their own custom warehouse layouts through a layout editor.",
                "Implemented filters and search functionality to allow users to easily identify a desired product/category.",
                "Implemented a delivery assignment system to automatically assign warehouse workers the most optimal inventory for a delivery.",
                "Implemented a KPI dashboard to show relevant inventory data.",
                "Implemented a multi-user access system to handle user privileges.",
                "Implemented a modified sorting algorithm to generate inventory sorting proposals based on specified parameters, such as product movement, expiration date, etc.",
                "Mounted the project in Google Cloud Platform."
            ],
            tech_stack: [
                "Python", "Flask", "MySQL", "Svelte", "ThreeJS", "Google Cloud Platform", "UI Design"
            ]
        },
        {
            title: "Software Engineer (Intern)",
            company: "Ternium",
            date_start: "2022-01",
            date_end: "2025-05",
            description: "I worked as a Software Engineer to develop an internal tool to calculate safety stock and reorder point based on historical inventory data.",
            achievements: [
                "Feasablity analysis to determine if Machine Learning could be applied to the project.",
                "Designed and implemented an internal tool to calculate safety stock and reorder point for warehouse inventory.",
                "Created a simple web-based GUI for ease of use."
            ],
            tech_stack: [
                "Python", "Pandas", "Flask", "HTML", "CSS"
            ]
        },
        {
            title: "React Native Developer (Intern)",
            company: "DCA México",
            date_start: "2021-08",
            date_end: "2021-12",
            description: "I worked as a React Native Developer to create a mobile app for schools, allowing teachers to create student groups and visualize student and class performance through quizzes assigned to students.",
            achievements: [
                "Designed and implemented the MySQL database.",
                "Designed the UI for the mobile app.",
                "Designed and implemented the mobile app using React Native.",
                "Implemented gamification features to make the app more engaging for students."
            ],
            tech_stack: [
                "React Native", "Expo", "MySQL", "UI Design"
            ]
        },
    ]

    return (
        <>
            <div className="flex flex-col">
                <div className='flex flex-col gap-y-4'>
                    <PageTitle title='Work Experience' />
                    {
                        experience.map((item) => {
                            return <WorkItem
                                title={item.title}
                                company={item.company}
                                date_start={item.date_start}
                                date_end={item.date_end}
                                description={item.description}
                                achievements={item.achievements}
                                tech_stack={item.tech_stack}
                            />
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Work