import WorkItem from '../components/WorkItem'
import PageTitle from '../components/PageTitle'
import { v4 as uuidv4 } from "uuid";

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
                "Conducted requirement analysis to ensure the project proposals meet client's needs and designed wireframes for stakeholder review and approval.",
                "Collaborated with cross-functional teams to align business objectives and improve operational efficiency.",
                "Created personalized landing pages to increase client exposure.",
                "Implemented new features and maintenance for our proprietary framework.",
                "Developed and maintained internal tools, such as our Log Server."
            ],
            tech_stack: [
                "Python", "MySQL", "FastAPI", "Quasar", "NiceGUI", "Relational Database", "Database Design", "UI Design"
            ]
        },
        {
            title: "Data Engineer",
            company: "Crystal Systems",
            date_start: "2022-07",
            date_end: "2023-10",
            description: "I worked as a Data Engineer and Full-Stack Developer, and received training in multiple technologies.",
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
            description: "I created my college thesis in collaboration with Arca Continental, successfully designing and building a 3D warehouse visualization system to reduce inventory loading times.",
            achievements: [
                "Designed, implemented and managed the MySQL database and a custom REST API with Flask.",
                "Designed and implemented a 3D visualization system for warehouse inventory using Svelte and ThreeJS, with a custom layout editor, search/filtering and an auto-assignment system.",
                "Developed a KPI dashboard to visualize warehouse performance metrics.",
                "Implemented a 3-level user access privilege system.",
                "Implemented a modified sorting algorithm to generate inventory sorting proposals based on user-selected parameters.",
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
                "Feasiblity analysis to determine if Machine Learning could be applied to the project.",
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
                                key={uuidv4()}

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