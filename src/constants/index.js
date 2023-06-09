import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  cinema,
  sign,
  churn,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Database Engineer",
    icon: web,
  },
  {
    title: "Data Analyst",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Artificial Intelligence Engineer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Data Analyst Research Assistant",
    company_name: "Cyberinfrastructure for Network Science (CNS) at Indiana University",
    icon: starbucks,
    iconBg: "#383E56",
    date: "August, 2022 - Present",
    points: [
      "Developed a data pipeline utilizing SPARQL and Python to extract data via REST API for performing comprehensive comparisons across 8 distinct organ datasets.",
      "Performed Data Transformations between 150 thousand data points using Pandas to facilitate biological research.",
      "Visualized the Data Points extracted from REST APIs using Neo4j to find hierarchical relationships in data and published the work in NIH website.",
      "Implemented the BERT model to calculate scores for common keywords in biological names within a dataset, achieving an impressive accuracy of 93% through extensive analysis, fine-tuning the BERT for accurate keyword identification.",
      "Implemented an end-to-end data pipeline using Apache Airflow to automate ETL processes, reducing manual effort by 80%.",
    ],
  },
  {
    title: "Machine Learning / Natural Language Processing Intern",
    company_name: "Collab Lab Pvt. Ltd.",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "April, 2021 -  August, 2021",
    points: [
      "Developed a student-friendly chatbot module utilizing Transformers, incorporating a 3 million question corpus to facilitate engaging and informative conversations with students.",
      "Collaborated  with the development team following AGILE methodology of SDLC (Software Development Life Cycle) to implement the chatbot web interface using Flask - Jinja2 backend development and React JS / CSS UI.",
      "Fine-tuned the hyperparameters of the model to generate 50 different combinations of results, resulting in an impressive accuracy of 83%. This iterative optimization process significantly enhanced the performance and reliability of the model.",
      "Performed A/B testing on the chatbot web UI, gathered user reviews and feedback, and implemented iterative improvements based on the results, resulting in a significant 25% increase in accuracy according to user feedback.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Tour De Monde",
    description:
      "Our product is a tour management and booking system. Users will be able to find hotels, book reservations for activities, and find flights that work with their travel. There are also admins that can be used to create a company and post their possible bookings for users to buy and use.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "postgresql",
        color: "green-text-gradient",
      },
      {
        name: "flask",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/Sourolio10/TourdeMonde",
  },
  {
    name: "Cine Tracker",
    description:
      "The purpose of this project is to develop a web application that utilizes a movie dataset from Kaggle to allow users to browse through a library of movies and view various visualizations that show trends in movies. It provides users the flexibility to maintain a watchlist and a list of favorite movies.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "sqlite",
        color: "green-text-gradient",
      },
      {
        name: "flask",
        color: "pink-text-gradient",
      },
    ],
    image: cinema,
    source_code_link: "https://github.com/Sourolio10/movie-mania/",
  },
  {
    name: "Stock Hive",
    description:
      "StockHive is a stock data forecasting and visualization webapp. It is mostly directed towards users who want to invest in the best stocks without much knowledge of the stock market. The application utilizes advanced time series forecasting techniques on the stock data and produces predictions.",
    tags: [
      {
        name: "timeseries",
        color: "blue-text-gradient",
      },
      {
        name: "stocks",
        color: "green-text-gradient",
      },
      {
        name: "arima",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/Sourolio10/stockhive/",
  },
  {
    name: "Chat with Genie",
    description:
      "The Chat with Genie Project for the Morgan Stanley Code-to-Give Hackathon aims to create a communication platform connecting families across states, promoting those not yet in the program. It enables eligible children in Georgia to make wishes while fostering family communication.",
    tags: [
      {
        name: "openai",
        color: "blue-text-gradient",
      },
      {
        name: "gpt3",
        color: "green-text-gradient",
      },
      {
        name: "rubyonrails",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/Sourolio10/makeawish-chatgpt--webapp/",
  },
  {
    name: "Customer churn analysis",
    description:
      "Power BI and DAX were utilized to analyze customer churn, achieving 95% accuracy in predicting churn and identifying key patterns, and visualizing them with the in-built PowerBI tools. This resulted in actionable recommendations and a 20% reduction in churn rate within six months.",
    tags: [
      {
        name: "churn",
        color: "blue-text-gradient",
      },
      {
        name: "powerbi",
        color: "green-text-gradient",
      },
      {
        name: "analysis",
        color: "pink-text-gradient",
      },
    ],
    image: churn,
    source_code_link: "https://github.com/Sourolio10/makeawish-chatgpt--webapp/",
  },
  {
    name: "Real-time American Sign Language Detector",
    description:
      "This project developed an LSTM model trained on a dataset of 42 hand coordinates per frame to classify hand gestures in real-time, achieving an impressive 83% accuracy. The findings were published in the IJCSE journal in August 2021.",
    tags: [
      {
        name: "opencv",
        color: "blue-text-gradient",
      },
      {
        name: "mediapipe",
        color: "green-text-gradient",
      },
      {
        name: "rnn",
        color: "pink-text-gradient",
      },
    ],
    image: sign,
    source_code_link: "https://github.com/Sourolio10/Sign-language-recognition-with-RNN-and-Mediapipe/",
  },
];

export { services, technologies, experiences, testimonials, projects };
