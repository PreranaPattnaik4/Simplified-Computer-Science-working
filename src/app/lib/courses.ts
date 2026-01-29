
import placeholderImages from './placeholder-images.json';

const courses = [
  {
    slug: 'advanced-ai-deep-learning-with-tensorflow',
    title: 'Advanced AI: Deep Learning with TensorFlow',
    description: 'Master deep learning concepts and build advanced neural networks using TensorFlow. This course covers everything from fundamental principles to advanced applications, preparing you for a career at the forefront of AI.',
    level: 'Advanced',
    primaryCategory: 'Artificial Intelligence',
    suggestedTags: ['Python', 'TensorFlow', 'PyTorch'],
    image: placeholderImages.course1.src,
    rating: 5,
    students: 125,
    comments: 23,
    author: 'Prerana',
    isTopCourse: true,
    syllabus: [
      { 
        title: 'Module 1: Introduction to Deep Learning', 
        lessons: [
          { slug: 'intro-to-deep-learning', title: 'Understanding Deep Learning', content: 'Content for intro to deep learning.' },
          { slug: 'neural-networks-basics', title: 'Neural Networks Basics', content: 'Content for neural networks basics.' },
        ] 
      },
    ]
  },
  {
    slug: 'full-stack-web-development-with-nextjs-and-react',
    title: 'Full-Stack Web Development with Next.js & React',
    description: 'Build and deploy modern, server-rendered web applications from scratch. You will learn the entire stack, from front-end development with React to back-end with Next.js, and deploy your applications with confidence.',
    level: 'Intermediate',
    primaryCategory: 'Software Development',
    suggestedTags: ['JavaScript', 'Next.js', 'DevOps'],
    image: placeholderImages.course2.src,
    rating: 4,
    students: 852,
    comments: 102,
    author: 'Prerana',
    isTopCourse: true,
    syllabus: [
      { 
        title: 'Module 1: React Fundamentals', 
        lessons: [
          { slug: 'react-basics', title: 'React Basics', content: 'Content for React basics.' },
          { slug: 'state-props', title: 'State and Props', content: 'Content for state and props.' },
        ] 
      },
    ]
  },
  {
    slug: 'aws-certified-cloud-practitioner-exam-prep',
    title: 'AWS Certified Cloud Practitioner: Exam Prep',
    description: 'A comprehensive guide to mastering the AWS cloud and passing the CCP exam.',
    level: 'Beginner',
    primaryCategory: 'Cloud & IT Infrastructure',
    suggestedTags: ['AWS', 'DevOps', 'Network Security'],
    image: placeholderImages.course3.src,
    rating: 5,
    students: 2341,
    comments: 450,
    author: 'Prerana',
    isTopCourse: false,
    syllabus: [
      { 
        title: 'Module 1: Introduction to AWS', 
        lessons: [
          { slug: 'what-is-aws', title: 'What is AWS?', content: 'Content for what is AWS.' },
          { slug: 'aws-global-infrastructure', title: 'AWS Global Infrastructure', content: 'Content for AWS Global Infrastructure.' },
        ] 
      },
    ]
  },
  {
    slug: 'data-structures-and-algorithms-in-python',
    title: 'Data Structures & Algorithms in Python',
    description: 'Strengthen your core computer science fundamentals with practical Python examples.',
    level: 'Intermediate',
    primaryCategory: 'Software Development',
    suggestedTags: ['Python', 'Algorithms'],
    image: placeholderImages.course4.src,
    rating: 5,
    students: 1780,
    comments: 250,
    author: 'Prerana',
    isTopCourse: false,
    syllabus: [
      { 
        title: 'Module 1: Core Data Structures', 
        lessons: [
          { slug: 'arrays-and-lists', title: 'Arrays and Lists', content: 'Content for arrays and lists.' },
          { slug: 'stacks-and-queues', title: 'Stacks and Queues', content: 'Content for stacks and queues.' },
        ] 
      },
    ]
  },
  {
    slug: 'introduction-to-generative-ai-and-large-language-models',
    title: 'Introduction to Generative AI & Large Language Models',
    description: 'Explore the fundamentals of generative AI and learn how LLMs are transforming industries.',
    level: 'Beginner',
    primaryCategory: 'Artificial Intelligence',
    suggestedTags: ['Python', 'TensorFlow'],
    image: placeholderImages.course5.src,
    rating: 4,
    students: 950,
    comments: 120,
    author: 'Prerana',
    isTopCourse: false,
    syllabus: [
      { 
        title: 'Module 1: What is Generative AI?', 
        lessons: [
          { slug: 'intro-to-genai', title: 'Introduction to Generative AI', content: 'Content for intro to GenAI.' },
          { slug: 'understanding-llms', title: 'Understanding LLMs', content: 'Content for understanding LLMs.' },
        ] 
      },
    ]
  },
  {
    slug: 'docker-and-kubernetes-the-complete-guide',
    title: 'Docker & Kubernetes: The Complete Guide',
    description: 'Containerize and orchestrate your applications for scalable and efficient deployments. This course provides hands-on experience with the tools that power modern cloud infrastructure.',
    level: 'Intermediate',
    primaryCategory: 'Cloud & IT Infrastructure',
    suggestedTags: ['Docker', 'Kubernetes', 'DevOps'],
    image: placeholderImages.course6.src,
    rating: 5,
    students: 1150,
    comments: 180,
    author: 'Prerana',
    isTopCourse: true,
    syllabus: [
      { 
        title: 'Module 1: Docker Fundamentals', 
        lessons: [
          { slug: 'intro-to-docker', title: 'Introduction to Docker', content: 'Content for intro to Docker.' },
          { slug: 'docker-containers', title: 'Working with Containers', content: 'Content for Docker containers.' },
        ] 
      },
    ]
  },
  {
    slug: 'cybersecurity-fundamentals-defending-the-digital-frontier',
    title: 'Cybersecurity Fundamentals: Defending the Digital Frontier',
    description: 'Learn the core principles of cybersecurity and how to protect systems from threats.',
    level: 'Beginner',
    primaryCategory: 'Cybersecurity',
    suggestedTags: ['Network Security'],
    image: placeholderImages.course7.src,
    rating: 4,
    students: 780,
    comments: 95,
    author: 'Prerana',
    isTopCourse: false,
    syllabus: [
      { 
        title: 'Module 1: Introduction to Cybersecurity', 
        lessons: [
          { slug: 'intro-to-cybersecurity', title: 'Introduction to Cybersecurity', content: 'Content for intro to cybersecurity.' },
          { slug: 'common-threats', title: 'Common Threats', content: 'Content for common threats.' },
        ] 
      },
    ]
  },
  {
    slug: 'advanced-natural-language-processing-with-pytorch',
    title: 'Advanced Natural Language Processing with PyTorch',
    description: 'Dive deep into NLP techniques and build sophisticated language models with PyTorch.',
    level: 'Advanced',
    primaryCategory: 'Artificial Intelligence',
    suggestedTags: ['Python', 'PyTorch'],
    image: placeholderImages.course8.src,
    rating: 5,
    students: 450,
    comments: 85,
    author: 'Prerana',
    isTopCourse: false,
    syllabus: [
      { 
        title: 'Module 1: NLP Fundamentals', 
        lessons: [
          { slug: 'intro-to-nlp', title: 'Introduction to NLP', content: 'Content for intro to NLP.' },
          { slug: 'text-preprocessing', title: 'Text Preprocessing', content: 'Content for text preprocessing.' },
        ] 
      },
    ]
  },
  {
    slug: 'sql-for-data-science-from-beginner-to-advanced',
    title: 'SQL for Data Science: From Beginner to Advanced',
    description: 'Master the language of data and perform complex queries for insightful analysis.',
    level: 'Intermediate',
    primaryCategory: 'Data Science & Analytics',
    suggestedTags: ['SQL', 'NoSQL'],
    image: placeholderImages.course9.src,
    rating: 5,
    students: 2100,
    comments: 320,
    author: 'Prerana',
    isTopCourse: false,
    syllabus: [
      { 
        title: 'Module 1: SQL Basics', 
        lessons: [
          { slug: 'intro-to-sql', title: 'Introduction to SQL', content: 'Content for intro to SQL.' },
          { slug: 'select-queries', title: 'SELECT Queries', content: 'Content for SELECT queries.' },
        ] 
      },
    ]
  },
  {
    slug: 'introduction-to-ux-ui-design-principles',
    title: 'Introduction to UX/UI Design Principles',
    description: 'Learn the fundamentals of user experience and user interface design to create intuitive products.',
    level: 'Beginner',
    primaryCategory: 'Software Development',
    suggestedTags: ['UX/UI Design'],
    image: placeholderImages.course10.src,
    rating: 4,
    students: 650,
    comments: 70,
    author: 'Prerana',
    isTopCourse: false,
    syllabus: [
      { 
        title: 'Module 1: UX/UI Fundamentals', 
        lessons: [
          { slug: 'intro-to-ux-ui', title: 'Introduction to UX/UI', content: 'Content for intro to UX/UI.' },
          { slug: 'design-thinking', title: 'Design Thinking Process', content: 'Content for design thinking.' },
        ] 
      },
    ]
  },
  {
    slug: 'compiler-design-and-theory-from-code-to-execution',
    title: 'Compiler Design & Theory: From Code to Execution',
    description: 'Understand the inner workings of compilers and how source code is translated into machine code.',
    level: 'Advanced',
    primaryCategory: 'Software Development',
    suggestedTags: ['Algorithms'],
    image: placeholderImages.course11.src,
    rating: 5,
    students: 250,
    comments: 45,
    author: 'Prerana',
    isTopCourse: false,
    syllabus: [
      { 
        title: 'Module 1: Compiler Theory', 
        lessons: [
          { slug: 'intro-to-compilers', title: 'Introduction to Compilers', content: 'Content for intro to compilers.' },
          { slug: 'lexical-analysis', title: 'Lexical Analysis', content: 'Content for lexical analysis.' },
        ] 
      },
    ]
  },
  {
    slug: 'object-oriented-design-patterns-in-javascript',
    title: 'Object-Oriented Design Patterns in JavaScript',
    description: 'Learn to write scalable, maintainable, and reusable code with proven design patterns.',
    level: 'Intermediate',
    primaryCategory: 'Software Development',
    suggestedTags: ['JavaScript', 'Algorithms'],
    image: placeholderImages.course12.src,
    rating: 4,
    students: 890,
    comments: 110,
    author: 'Prerana',
    isTopCourse: false,
    syllabus: [
      { 
        title: 'Module 1: OOD Principles', 
        lessons: [
          { slug: 'intro-to-ood', title: 'Introduction to OOD', content: 'Content for intro to OOD.' },
          { slug: 'solid-principles', title: 'SOLID Principles', content: 'Content for SOLID principles.' },
        ] 
      },
    ]
  },
  {
    slug: 'mastering-python-for-data-science-and-ai',
    title: 'Mastering Python for Data Science & AI',
    description: 'A comprehensive course covering Python fundamentals and its advanced applications in data science and artificial intelligence. Perfect for aspiring data scientists and AI specialists.',
    level: 'Intermediate',
    primaryCategory: 'Data Science & Analytics',
    suggestedTags: ['Python', 'TensorFlow', 'PyTorch'],
    image: placeholderImages.course13.src,
    rating: 5,
    students: 3200,
    comments: 450,
    author: 'Prerana',
    isTopCourse: false,
    syllabus: [
        {
            title: "Module 1: Programming Fundamentals",
            lessons: [
                { 
                    slug: "introduction-to-python", 
                    title: "Introduction to Python and its data ecosystem", 
                    content: "### Objective\nUnderstand Python's role in data science and set up your development environment.\n\n### 1.1 What is Python?\nPython is a high-level, interpreted programming language known for its simple syntax and readability. Its versatility makes it a top choice for web development, automation, and scientific computing.\n*   **Key Features:** Dynamic typing, extensive standard library, large ecosystem of third-party packages.\n*   **Why Python for Data Science?** Simplified syntax for complex logic, strong support for data manipulation (Pandas), numerical computation (NumPy), and machine learning (Scikit-learn, TensorFlow).\n\n### 1.2 Setting Up Your Environment\nWe recommend using the Anaconda distribution, which packages Python with essential data science libraries.\n1.  Download and install Anaconda from the official website.\n2.  Open the Anaconda Navigator and launch a Jupyter Notebook or Spyder IDE.\n3.  Verify your installation by running `python --version` and `conda list` in your terminal.\n\n### Tip\nUse virtual environments (like `conda create --name myenv python=3.8`) to manage dependencies for different projects and avoid conflicts."
                },
                { 
                    slug: "variables-and-data-types", 
                    title: "Variables, data types, and operators", 
                    content: "### Objective\nUnderstand how to store and manipulate data using Python's primitive data types.\n\n### 2.1 Variables\nA variable is a named location used to store data in memory.\n```python\n# Variable assignment\ncourse_name = \"Mastering Python\"\nstudents_enrolled = 3200\nrating = 5.0\nis_free = True\n```\n\n### 2.2 Common Data Types\n*   **String (`str`):** Textual data. Enclosed in single ('') or double (\"\") quotes.\n*   **Integer (`int`):** Whole numbers.\n*   **Float (`float`):** Numbers with a decimal point.\n*   **Boolean (`bool`):** Represents truth values, `True` or `False`.\n\n### 2.3 Type Casting\nYou can convert variables from one type to another.\n```python\n# Convert float to int\nrating_int = int(rating) # Becomes 5\n\n# Convert int to string\nstudent_count_str = str(students_enrolled) # Becomes \"3200\"\n```\n\n### 2.4 Operators\n*   **Arithmetic:** `+`, `-`, `*`, `/`, `%` (modulo), `**` (exponent)\n*   **Comparison:** `==`, `!=`, `>`, `<`, `>=`, `<=`\n*   **Logical:** `and`, `or`, `not`\n\n### Example:\n```python\n# Calculate the average rating after a new 4.0 review\nnew_rating = 4.0\ntotal_ratings = 100 # assuming 100 ratings before\ncurrent_total = rating * total_ratings\nnew_average = (current_total + new_rating) / (total_ratings + 1)\nprint(f\"New average rating: {new_average}\")\n```"
                },
                { 
                    slug: "control-flow", 
                    title: "Control flow: loops and conditional statements", 
                    content: "### Objective\nLearn to control the execution flow of your program using loops and conditional logic.\n\n### 3.1 Conditional Statements (`if`, `elif`, `else`)\nExecute blocks of code based on whether a condition is true.\n```python\nscore = 85\nif score >= 90:\n    grade = \"A\"\nelif score >= 80:\n    grade = \"B\"\nelse:\n    grade = \"C\"\n\nprint(f\"Your grade is: {grade}\") # Output: Your grade is: B\n```\n\n### 3.2 `for` Loops\nIterate over a sequence (like a list, tuple, or string).\n```python\n# Print each letter of a word\nfor letter in \"Python\":\n    print(letter)\n\n# Iterate over a list of numbers\nnumbers = [1, 2, 3, 4, 5]\nsum_of_numbers = 0\nfor num in numbers:\n    sum_of_numbers += num\nprint(f\"Sum: {sum_of_numbers}\") # Output: Sum: 15\n```\n\n### 3.3 `while` Loops\nExecute a block of code as long as a condition is true.\n```python\n# Countdown from 5\ncount = 5\nwhile count > 0:\n    print(count)\n    count -= 1 # Crucial to avoid an infinite loop\nprint(\"Blast off!\")\n```\n\n### Tip\nUse list comprehensions for a concise way to create lists from loops.\n```python\n# Traditional for loop\nsquares = []\nfor i in range(5):\n    squares.append(i**2)\n\n# List comprehension equivalent\nsquares_comp = [i**2 for i in range(5)]\nprint(squares_comp) # [0, 1, 4, 9, 16]\n```" 
                },
                { slug: "functions-and-modules", title: "Functions and modular programming", content: "Content for functions and modules." },
                { slug: "file-io", title: "File I/O and working with data sources", content: "Content for file I/O." }
            ]
        },
        {
            title: "Module 2: Python for Data Science",
            lessons: [
                { slug: 'why-python-for-ds', title: 'Why Python for Data Science?', content: 'Python is the dominant language for data science due to its simplicity, readability, and the vast ecosystem of powerful libraries. Libraries like Pandas, NumPy, Matplotlib, and Scikit-learn provide all the tools needed for data manipulation, analysis, visualization, and machine learning.' },
                { slug: "intro-to-numpy", title: "Introduction to NumPy arrays and vectorized operations", content: "Content for NumPy." },
                { slug: "intro-to-pandas", title: "Pandas Series and DataFrame objects", content: "Content for Pandas." },
                { slug: "data-cleaning", title: "Data cleaning, transformation, and merging", content: "Content for data cleaning." },
            ]
        },
        {
            title: "Module 3: Data Visualization with Matplotlib and Seaborn",
            lessons: [
                { slug: 'visualization-principles', title: 'Principles of effective data visualization', content: 'Content for visualization principles.' },
                { slug: 'matplotlib-plotting', title: 'Creating various plot types with Matplotlib', content: 'Content for Matplotlib.' },
                { slug: 'seaborn-plotting', title: 'Statistical data visualization with Seaborn', content: 'Content for Seaborn.' },
                { slug: 'customizing-plots', title: 'Customizing plots for presentations', content: 'Content for customizing plots.' },
            ]
        },
        {
            title: "Module 4: Machine Learning Fundamentals with Scikit-Learn",
            lessons: [
                { slug: 'ml-concepts', title: 'Introduction to machine learning concepts', content: 'Content for ML concepts.' },
                { slug: 'supervised-learning', title: 'Supervised learning: regression and classification', content: 'Content for supervised learning.' },
                { slug: 'unsupervised-learning', title: 'Unsupervised learning: clustering and dimensionality reduction', content: 'Content for unsupervised learning.' },
                { slug: 'model-evaluation', title: 'Model evaluation and cross-validation', content: 'Content for model evaluation.' },
                { slug: 'ml-pipeline', title: 'Building a complete machine learning pipeline', content: 'Content for ML pipeline.' },
            ]
        },
        {
            title: "Module 5: Introduction to Deep Learning",
            lessons: [
                { slug: 'neural-networks-concepts', title: 'Core concepts of neural networks', content: 'Content for neural networks.' },
                { slug: 'tensorflow-keras-intro', title: 'Introduction to TensorFlow and Keras (or PyTorch)', content: 'Content for TensorFlow/Keras.' },
                { slug: 'building-a-neural-network', title: 'Building a simple neural network for classification', content: 'Content for building a neural network.' },
                { slug: 'activation-optimizers', title: 'Understanding activation functions and optimizers', content: 'Content for activation functions.' },
            ]
        }
    ]
  },
  {
    slug: 'cs-basics-get-started',
    title: 'Computer Science Basics: Everything You Need to Know to Get Started',
    description: 'This course will introduce you to the essential concepts, key terminology, and foundational topics that make up the heart of Computer Science.',
    level: 'Beginner',
    primaryCategory: 'Software Development',
    suggestedTags: ['Computer Science', 'Algorithms', 'Python'],
    image: placeholderImages.course14.src,
    rating: 5,
    students: 0,
    comments: 0,
    author: 'Prerana',
    isTopCourse: false,
    syllabus: [
        {
            title: "Module 1: Introduction to Computer Science",
            lessons: [
                { 
                    slug: "what-is-cs", 
                    title: "What is Computer Science?",
                    content: "Computer Science is the study of computers and computational systems. It involves understanding how computers process information, how software is developed, and how data is handled. While many think of Computer Science as just coding or programming, the field is far more extensive. It covers areas like data structures, algorithms, artificial intelligence, databases, and much more.\n\nFor beginners, it’s helpful to think of Computer Science as the science of problem-solving using computers. The tools and techniques learned here are applicable to solving real-world problems efficiently and effectively."
                }
            ]
        },
        {
            title: "Module 2: Key Areas of Computer Science",
            lessons: [
                { slug: "algorithms-data-structures", title: "Algorithms and Data Structures", content: "Algorithms are step-by-step instructions that tell the computer how to perform a task. Understanding algorithms allows you to write code that solves problems in an optimized way.\n\nData Structures organize and store data. Common types include arrays, linked lists, trees, and graphs. Learning these structures is fundamental because they affect the performance of your program." },
                { slug: "programming-languages", title: "Programming Languages", content: "Programming is at the heart of Computer Science. Some popular programming languages include Python, Java, C++, and JavaScript. Each language has its strengths, and knowing the right one for the task is essential.\n\nThe 2024 syllabus focuses on Python for beginners due to its readability and widespread use in educational settings." },
                { slug: "software-engineering", title: "Software Engineering", content: "Software Engineering deals with designing, building, and maintaining software applications. It includes methodologies like Agile and Waterfall, as well as tools for version control (e.g., Git)." },
                { slug: "ai-ml", title: "Artificial Intelligence and Machine Learning", content: "AI is the simulation of human intelligence processes by machines. It includes Machine Learning, where computers learn from data to make decisions without explicit programming. The 2024 syllabus emphasizes the growing importance of AI in fields like healthcare, finance, and robotics." },
                { slug: "databases", title: "Databases", content: "Understanding how to organize, store, and retrieve data is crucial for any programmer. Databases like MySQL and MongoDB are commonly used in real-world applications." },
                { slug: "networking-security", title: "Networking and Security", content: "Networking is about connecting computers and systems, allowing them to communicate and share resources. It covers everything from local networks to the global Internet.\n\nCybersecurity ensures the protection of data and systems from malicious threats. In the 2024 syllabus, this area focuses on encryption, firewalls, and secure software development practices." }
            ]
        },
        {
            title: "Module 3: The 2024 Syllabus Overview",
            lessons: [
                { slug: "programming-fundamentals", title: "Fundamentals of Programming", content: "Students are introduced to basic programming concepts, using languages like Python. Topics covered include variables, data types, loops, conditionals, and functions." },
                { slug: "problem-solving-techniques", title: "Problem-Solving Techniques", content: "Problem-solving is a critical skill for any computer scientist. The syllabus encourages students to break down problems into smaller, manageable parts using algorithms and data structures." },
                { slug: "computer-systems", title: "Understanding Computer Systems", content: "Basic hardware concepts like CPUs, memory, and storage are covered, providing students with an understanding of how software interacts with hardware." },
                { slug: "web-development-intro", title: "Introduction to Web Development", content: "Basic HTML, CSS, and JavaScript are introduced to help students understand how websites are created and structured." },
                { slug: "ethical-computing", title: "Ethical Computing", content: "With technology advancing rapidly, students are also taught the ethical implications of computing. This includes data privacy, the environmental impact of technology, and the importance of ethical decision-making in software development." }
            ]
        },
        {
            title: "Module 4: Your Journey in Computer Science",
            lessons: [
                { slug: "why-learn-cs", title: "Why Learn Computer Science?", content: "Versatility and Career Opportunities: Computer Science is a gateway to a wide range of careers. From software development to data science, cybersecurity, and AI, there is an increasing demand for skilled professionals.\n\nProblem-Solving and Critical Thinking: Learning Computer Science enhances your ability to approach problems logically and solve them efficiently. It encourages critical thinking, pattern recognition, and creativity.\n\nInnovation and Future-Proofing: With technology constantly evolving, understanding Computer Science positions you for future innovations in fields like quantum computing, AI, and blockchain." },
                { slug: "how-to-start", title: "How to Start Your Journey", content: "If you’re a complete beginner, don’t worry! Here’s how you can get started:\n\n1.  **Pick a Programming Language**: Start with Python, which is simple, easy to understand, and powerful enough for advanced topics. Numerous online platforms like Codecademy, freeCodeCamp, and Coursera offer free resources to learn programming.\n2.  **Practice Problem-Solving**: Websites like LeetCode and HackerRank provide practice problems that help you improve your algorithmic thinking and coding skills.\n3.  **Build Small Projects**: Apply what you’ve learned by building simple projects. Start with things like a calculator, a to-do list, or a personal blog. These projects will give you hands-on experience and make abstract concepts concrete.\n4.  **Explore Advanced Topics**: Once you’re comfortable with the basics, dive into more advanced topics like data structures, algorithms, and AI. Participate in open-source projects and collaborate with others to grow your skills." }
            ]
        }
    ]
  },
  {
    slug: 'web-dev-guide',
    title: 'The Ultimate Guide to Website Development with Coding',
    description: 'A complete guide covering everything from front-end and back-end development to full-stack technologies, security best practices, and performance optimization.',
    level: 'Intermediate',
    primaryCategory: 'Software Development',
    suggestedTags: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'],
    image: placeholderImages.course15.src,
    rating: 5,
    students: 0,
    comments: 0,
    author: 'Prerana',
    isTopCourse: false,
    syllabus: [
        {
            title: "Module 1: Introduction to Web Development",
            lessons: [
                {
                    slug: "what-is-web-development",
                    title: "What is Web Development?",
                    content: "Welcome to the world of web development! At its core, web development is the work involved in developing a website for the Internet. This can range from developing a simple single static page of plain text to complex web applications, electronic businesses, and social network services.\n\nWeb development is broadly divided into two main areas:\n*   **Front-End Development:** This is the part of the website that users interact with directly. It's often called the \"client-side\" of the application. It includes everything that users experience directly: text colors and styles, images, graphs and tables, buttons, and navigation menus.\n*   **Back-End Development:** This is the \"server-side\" of a website. It stores and organizes data, and also makes sure everything on the client-side of the website works fine. It is the part of the website that you cannot see and interact with. It is the software that runs on servers.\n\nThis course will guide you through both front-end and back-end technologies, giving you the skills to become a full-stack developer."
                },
                {
                    slug: "how-websites-work",
                    title: "How Websites Work: Clients and Servers",
                    content: "Every time you open a website in your browser, a complex interaction happens between your computer (the **client**) and a powerful computer elsewhere (the **server**).\n\nHere's a simple breakdown:\n1.  **The Client (Your Browser):** When you type a website address (like www.simplifiedcomputerscience.com) into your browser, you are making a request. Your browser is the client.\n2.  **The Request (HTTP):** The browser sends a request to the server using the Hypertext Transfer Protocol (HTTP). This request asks the server for the files needed to display the website.\n3.  **The Server:** The server is a computer that stores the website's files (HTML, CSS, JavaScript, images, etc.). When it receives a request, it finds the required files.\n4.  **The Response:** The server sends the files back to your browser.\n5.  **Rendering:** Your browser receives the files and \"renders\" them, which means it interprets the code (HTML for structure, CSS for styling, JavaScript for interactivity) and displays the visual website you see on your screen.\n\nUnderstanding this client-server relationship is fundamental to web development."
                },
                {
                    slug: "essential-tools",
                    title: "Essential Tools for Web Developers",
                    content: "To start your web development journey, you only need a few essential tools.\n\n*   **Code Editor:** This is where you'll write your code. While you could use a simple text editor, specialized code editors offer features like syntax highlighting, auto-completion, and error checking.\n    *   **Popular Choice:** [Visual Studio Code (VS Code)](https://code.visualstudio.com/) is a free, powerful, and highly popular code editor used by millions of developers. We highly recommend starting with it.\n\n*   **Web Browser:** You'll need a modern web browser to view your websites and use its developer tools.\n    *   **Popular Choices:** Google Chrome, Mozilla Firefox, and Microsoft Edge are all excellent choices. They come with powerful \"Developer Tools\" (often opened by pressing F12) that let you inspect your HTML, CSS, and JavaScript in real-time.\n\n*   **Version Control (Git):** Version control is a system that records changes to a file or set of files over time so that you can recall specific versions later.\n    *   **The Standard:** Git is the most widely used version control system. It allows you to track your project's history and collaborate with other developers. [GitHub](https://github.com/) is a platform that hosts Git repositories and is essential for modern development workflows."
                }
            ]
        },
        {
            title: "Module 2: Front-End Development",
            lessons: [
                { 
                    slug: "frontend-intro", 
                    title: "Introduction to Front-End", 
                    content: "Front-end development focuses on the visual and interactive aspects of a website that users see and engage with. It's all about creating a great user experience.\n\n**Key Components:**\n*   **HTML (HyperText Markup Language):** The backbone of web pages, defining structure and content. It provides essential elements such as headings, paragraphs, lists, and links.\n*   **CSS (Cascading Style Sheets):** Used for styling elements like colors, fonts, and layouts. CSS makes websites visually appealing and responsive.\n*   **JavaScript:** Adds interactivity, animations, and dynamic content to web pages, enabling user-friendly and engaging web applications.\n*   **TypeScript:** A superset of JavaScript that provides static typing, making it easier to manage large-scale applications."
                },
                {
                    slug: "frontend-frameworks", 
                    title: "Frameworks & Libraries", 
                    content: "Frameworks and libraries provide pre-written code to help you build applications faster.\n\n*   **Bootstrap:** A responsive CSS framework for fast and mobile-friendly development.\n*   **Tailwind CSS:** A utility-first CSS framework for flexible styling.\n*   **React.js:** A JavaScript library for building interactive UIs with reusable components.\n*   **Vue.js:** A progressive framework for developing user interfaces efficiently.\n*   **Next.js:** A React framework that enables server-side rendering for better performance and SEO."
                },
                {
                    slug: "responsive-design",
                    title: "Responsive Design",
                    content: "Responsive design ensures your website looks great on all devices.\n\n*   **Media Queries:** Adapting layouts based on screen size.\n*   **Flexbox:** A layout model for aligning elements dynamically.\n*   **Grid Layout:** A powerful system for designing structured web pages."
                },
                {
                    slug: "frontend-tips",
                    title: "5 Tips for Effective Front-End Development",
                    content: "1. Keep your code clean and well-structured.\n2. Use browser developer tools to debug and optimize.\n3. Follow accessibility guidelines (WCAG).\n4. Test across different devices and browsers.\n5. Minimize HTTP requests by combining files."
                }
            ]
        },
        {
            title: "Module 3: Back-End Development",
            lessons: [
                {
                    slug: "backend-intro",
                    title: "Introduction to Back-End",
                    content: "Back-end development powers the functionality of a website, managing data, logic, and security.\n\n**Programming Languages:**\n*   **Python (Django, Flask):** For robust and scalable web applications.\n*   **PHP:** A server-side scripting language for dynamic websites.\n*   **Node.js:** A runtime environment for executing JavaScript on the server.\n*   **Ruby on Rails:** A web application framework for rapid development."
                },
                {
                    slug: "databases",
                    title: "Databases",
                    content: "Databases are used to store and manage data.\n\n*   **MySQL:** A widely used relational database.\n*   **PostgreSQL:** A powerful, open-source relational database.\n*   **MongoDB:** A NoSQL database for flexible, JSON-like documents.\n*   **Firebase:** A real-time database by Google for cloud-based storage."
                },
                {
                    slug: "api-development",
                    title: "API Development",
                    content: "APIs allow different applications to communicate with each other.\n\n*   **RESTful APIs:** Standard APIs for communication between client and server.\n*   **GraphQL:** A query language for efficient data retrieval.\n*   **API Security:** Implementing token-based authentication and rate limiting."
                },
                {
                    slug: "backend-tips",
                    title: "5 Tips for Efficient Back-End Development",
                    content: "1. Write modular and reusable code.\n2. Optimize database queries for performance.\n3. Implement error handling and logging.\n4. Keep authentication and authorization secure.\n5. Regularly update dependencies."
                }
            ]
        },
        {
            title: "Module 4: Full-Stack Development",
            lessons: [
                {
                    slug: "fullstack-intro",
                    title: "What is Full-Stack?",
                    content: "Full-stack developers handle both front-end and back-end development, creating complete web applications.\n\n**Popular Stacks:**\n*   **MERN Stack:** MongoDB, Express.js, React, Node.js.\n*   **LAMP Stack:** Linux, Apache, MySQL, PHP.\n*   **MEVN Stack:** MongoDB, Express.js, Vue.js, Node.js.\n*   **Django & Flask Stack:** Python-based frameworks."
                },
                {
                    slug: "fullstack-tips",
                    title: "5 Tips for Successful Full-Stack Development",
                    content: "1. Keep front-end and back-end components loosely coupled.\n2. Use version control systems like Git.\n3. Follow best practices for API design.\n4. Implement server-side rendering (SSR) for better SEO.\n5. Use automated testing to ensure code quality."
                }
            ]
        },
        {
            title: "Module 5: Security & Optimization",
            lessons: [
                {
                    slug: "web-security",
                    title: "Website Security Best Practices",
                    content: "*   **SSL (Secure Socket Layer):** Encrypts data between the user and the server.\n*   **Authentication:** Implementing user authentication systems (OAuth, JWT).\n*   **SQL Injection Prevention:** Protecting against database attacks.\n*   **Web Application Firewall (WAF):** Protects websites from malicious traffic."
                },
                {
                    slug: "performance-optimization",
                    title: "Performance Optimization Techniques",
                    content: "*   **Caching:** Storing frequently accessed data for faster loading.\n*   **Lazy Loading:** Loading images and resources only when needed.\n*   **Image Optimization:** Compressing images to improve page speed.\n*   **Content Delivery Network (CDN):** Distributes website content across multiple servers for faster load times."
                },
                 {
                    slug: "security-tips",
                    title: "5 Tips for Web Security & Optimization",
                    content: "1. Use HTTPS to secure user data.\n2. Optimize images and minify CSS/JavaScript.\n3. Regularly update software and plugins.\n4. Set up automated backups.\n5. Use content delivery networks (CDNs)."
                }
            ]
        }
    ]
  },
  {
    slug: 'cs-top-10-topics',
    title: 'The 10 Most Important Topics in Computer Science',
    description: 'A comprehensive course covering the 10 most important topics that form the backbone of computer science, from algorithms to AI.',
    level: 'Beginner',
    primaryCategory: 'Computer Science',
    suggestedTags: ['Algorithms', 'Data Structures', 'Operating Systems', 'Cybersecurity', 'AI'],
    image: placeholderImages.course16.src,
    rating: 5,
    students: 0,
    comments: 0,
    author: 'Prerana',
    isTopCourse: false,
    syllabus: [
      {
        title: "Module 1: Algorithms",
        lessons: [
            { 
                slug: "cs-topic-algorithms", 
                title: "Algorithms: The Foundation", 
                content: `### What is an Algorithm?\n\nAn algorithm is a finite sequence of well-defined, computer-implementable instructions, typically to solve a class of specific problems or to perform a computation. Think of it as a recipe for a computer to follow.\n\n### Why Do They Matter?\n\nAlgorithms are the core of computer science. They determine how efficiently a program runs. A small change in an algorithm can be the difference between a program that runs in a fraction of a second and one that takes years!\n\n### Measuring Efficiency: Big O Notation\n\nWe use **Big O Notation** to describe an algorithm's performance or complexity. It characterizes how the runtime or space requirements grow as the input size grows. For example:\n\n- **O(1):** Constant time (e.g., accessing an array element by index).\n- **O(log n):** Logarithmic time (e.g., binary search).\n- **O(n):** Linear time (e.g., searching an unsorted list).\n- **O(n²):** Quadratic time (e.g., a simple bubble sort).\n\n### Common Examples\n\n**1. Searching Algorithms:**\n*   **Linear Search:** Checks every element in a list sequentially. Simple, but slow for large lists.\n*   **Binary Search:** Efficiently finds an item in a **sorted** list by repeatedly dividing the search interval in half.\n\n**2. Sorting Algorithms:**\n*   **Bubble Sort:** Repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order. Simple to understand, but very inefficient (O(n²)).\n*   **Merge Sort:** A more efficient, recursive algorithm that divides the list into halves, sorts them, and then merges them back together. Its complexity is O(n log n).\n`
            }
        ]
      },
      {
        title: "Module 2: Data Structures",
        lessons: [
            { 
                slug: "cs-topic-data-structures", 
                title: "Data Structures: Organizing Information", 
                content: `### What are Data Structures?\n\nData structures are specialized formats for organizing, processing, retrieving, and storing data. They provide a way to manage large amounts of data efficiently for uses such as large databases and internet indexing services. The choice of data structure directly impacts an algorithm's performance.\n\n### Common Data Structures\n\n**1. Arrays:**\n*   A collection of items stored at contiguous memory locations.\n*   **Use case:** Storing a list of elements of the same type. Fast access to elements using an index (O(1)).\n\n**2. Linked Lists:**\n*   A linear collection of data elements whose order is not given by their physical placement in memory. Each element points to the next.\n*   **Use case:** When you need efficient insertions or deletions from any position in the sequence.\n\n**3. Stacks:**\n*   A LIFO (Last-In, First-Out) structure. The last element added is the first one to be removed.\n*   **Use case:** Managing function calls (the "call stack"), undo functionality in an editor.\n\n**4. Queues:**\n*   A FIFO (First-In, First-Out) structure. The first element added is the first one to be removed.\n*   **Use case:** Managing tasks in a print queue, handling requests on a server.\n\n**5. Trees:**\n*   A hierarchical structure with a root value and subtrees of children with a parent node.\n*   **Use case:** File systems, representing hierarchical data like an organization chart. Binary search trees allow for fast searching, insertion, and deletion.\n\n**6. Graphs:**\n*   A set of nodes (vertices) and edges that connect pairs of nodes.\n*   **Use case:** Social networks, mapping applications (cities and roads), computer networks.`
            }
        ]
      },
      {
        title: "Module 3: Operating Systems",
        lessons: [
            { 
                slug: "cs-topic-os", 
                title: "Operating Systems: Bridging Software and Hardware", 
                content: `### What is an Operating System (OS)?\n\nThe OS is the most important software that runs on a computer. It manages the computer's memory and processes, as well as all of its software and hardware. It also allows you to communicate with the computer without knowing how to speak the computer's language.\n\n### Core Responsibilities\n\n**1. Process Management:**\n*   A **process** is a program in execution. The OS manages the lifecycle of processes, including creation, deletion, and scheduling.\n*   **Scheduling:** The OS decides which process gets to use the CPU and for how long. Common algorithms include First-Come, First-Served (FCFS), and Round Robin.\n*   **Threads:** A thread is a lightweight process. A single process can have multiple threads, allowing for multitasking (e.g., a web browser using one thread to display images and another to fetch data).\n\n**2. Memory Management:**\n*   The OS manages the computer's primary memory (RAM).\n*   It keeps track of which parts of memory are currently being used and by whom.\n*   It allocates and deallocates memory space as needed for programs and processes.\n*   **Virtual Memory:** A technique that allows the execution of a process that may not be completely in memory, using disk space as an extension of RAM.\n\n**3. File System Management:**\n*   The OS provides a structured way to store and retrieve files on storage devices like hard drives.\n\n**4. Device Management:**\n*   The OS communicates with hardware devices through their respective drivers.` 
            }
        ]
      },
      {
        title: "Module 4: Computer Networks",
        lessons: [
            { 
                slug: "cs-topic-networks", 
                title: "Computer Networks: How Computers Communicate", 
                content: `### What is a Computer Network?\n\nA computer network is a set of computers sharing resources located on or provided by network nodes. The computers use common communication protocols over digital interconnections to communicate with each other.\n\n### The Internet & The TCP/IP Model\n\nThe internet is a global network of computers. Its communication is standardized by the **TCP/IP protocol suite**. This model is divided into layers:\n\n1.  **Application Layer (e.g., HTTP, FTP):** Where network applications and their protocols reside. Your web browser uses HTTP (Hypertext Transfer Protocol).\n2.  **Transport Layer (e.g., TCP, UDP):** Provides host-to-host communication services. **TCP (Transmission Control Protocol)** is reliable and connection-oriented, ensuring all data arrives in order. **UDP (User Datagram Protocol)** is faster but less reliable.\n3.  **Internet Layer (e.g., IP):** Responsible for addressing, routing, and packaging data packets. The **IP (Internet Protocol)** address is a unique identifier for each device on the network.\n4.  **Link Layer:** Handles the physical connection to the network.\n\n### Key Concepts\n\n*   **DNS (Domain Name System):** The phonebook of the Internet. It translates human-readable domain names (like \`www.google.com\`) into machine-readable IP addresses.\n*   **HTTP/HTTPS:** The protocol used for transmitting web pages. HTTPS is the secure version, encrypting data between your browser and the server.\n*   **Routing:** The process of selecting a path for traffic in a network, or between or across multiple networks.`
            }
        ]
      },
      {
        title: "Module 5: Databases & DBMS",
        lessons: [
            { 
                slug: "cs-topic-databases", 
                title: "Databases: Storing and Retrieving Data", 
                content: `### What is a Database?\n\nA database is an organized collection of structured information, or data, typically stored electronically in a computer system. A **Database Management System (DBMS)** is the software that interacts with end users, applications, and the database itself to capture and analyze the data.\n\n### Types of Databases\n\n**1. Relational Databases (SQL):**\n*   Data is organized into tables (rows and columns).\n*   Uses **SQL (Structured Query Language)** for defining and manipulating the data.\n*   Emphasizes rigidity and consistency of data (schema-on-write).\n*   **Examples:** MySQL, PostgreSQL, Microsoft SQL Server.\n\n**2. Non-Relational Databases (NoSQL):**\n*   Data can be stored in various ways: document (JSON-like), key-value, wide-column, or graph.\n*   Offers more flexibility (schema-on-read).\n*   Often better for large-scale, unstructured data.\n*   **Examples:** MongoDB (document), Redis (key-value), Cassandra (wide-column), Neo4j (graph).\n\n### Core Concepts\n\n*   **Indexing:** A data structure technique to efficiently retrieve records from a database file. An index is like the index in the back of a book; it helps you find data without searching every row.\n*   **Transactions (ACID Properties):** A transaction is a single logical unit of work. In relational databases, transactions adhere to ACID properties (Atomicity, Consistency, Isolation, Durability) to guarantee data integrity even in the event of errors or power failures.` 
            }
        ]
      },
      {
        title: "Module 6: Programming Languages & Paradigms",
        lessons: [
            { 
                slug: "cs-topic-languages", 
                title: "Programming Languages & Paradigms", 
                content: `### What is a Programming Paradigm?\n\nA programming paradigm is a style or “way” of programming. It's an approach to solving problems using some programming language. Some languages are designed for one paradigm, while others support multiple.\n\n### Common Paradigms\n\n**1. Procedural Programming:**\n*   Based on the concept of the procedure call. Procedures, also known as routines or functions, simply contain a series of computational steps to be carried out.\n*   Code is structured into procedures that perform specific tasks.\n*   **Example Languages:** C, Pascal.\n\n**2. Object-Oriented Programming (OOP):**\n*   Based on the concept of "objects", which can contain data in the form of fields (often known as attributes or properties), and code, in the form of procedures (often known as methods).\n*   **Core Concepts:**\n    *   **Encapsulation:** Bundling data and methods that operate on the data within one unit.\n    *   **Inheritance:** A mechanism for creating new classes from existing ones.\n    *   **Polymorphism:** The ability to present the same interface for differing underlying forms (data types).\n*   **Example Languages:** Java, Python, C++.\n\n**3. Functional Programming:**\n*   Treats computation as the evaluation of mathematical functions and avoids changing-state and mutable data.\n*   Emphasizes the use of "pure functions" which have no side effects.\n*   **Example Languages:** Haskell, Lisp, F#. JavaScript and Python also support functional programming styles.`
            }
        ]
      },
      {
        title: "Module 7: Software Engineering",
        lessons: [
            { 
                slug: "cs-topic-software-engineering", 
                title: "Software Engineering: Building Real Software", 
                content: `### What is Software Engineering?\n\nSoftware engineering is the branch of computer science that deals with the design, development, testing, and maintenance of software applications. It applies engineering principles to create robust, efficient, and scalable software.\n\n### Software Development Life Cycle (SDLC)\n\nThe SDLC is a process followed for a software project. It consists of a detailed plan describing how to develop, maintain, replace and alter or enhance specific software. Common models include:\n\n*   **Waterfall Model:** A linear, sequential approach. Each phase must be completed before the next begins.\n*   **Agile Model:** An iterative approach. Development is done in short cycles (sprints), allowing for flexibility and adaptation to change.\n\n### Key Concepts\n\n**1. Design Patterns:**\n*   General, reusable solutions to commonly occurring problems within a given context in software design. They are not finished designs that can be transformed directly into code, but templates for how to solve a problem.\n*   **Examples:** Singleton Pattern, Factory Pattern, Observer Pattern.\n\n**2. Testing:**\n*   The process of evaluating a software application to find any bugs or errors.\n*   **Levels of Testing:**\n    *   **Unit Testing:** Testing individual components or functions.\n    *   **Integration Testing:** Testing how multiple components work together.\n    *   **System Testing:** Testing the complete, integrated system.\n\n**3. Version Control:**\n*   A system that records changes to a file or set of files over time so that you can recall specific versions later. **Git** is the most popular version control system, and **GitHub** is a platform for hosting Git repositories.`
            }
        ]
      },
      {
        title: "Module 8: Computer Architecture",
        lessons: [
            { 
                slug: "cs-topic-architecture", 
                title: "Computer Architecture: Inside the Machine", 
                content: `### What is Computer Architecture?\n\nComputer architecture is a set of rules and methods that describe the functionality, organization, and implementation of computer systems. It's the blueprint that tells us how the hardware components are connected and interact to create a working computer.\n\n### Core Components\n\n**1. CPU (Central Processing Unit):**\n*   The "brain" of the computer. It performs most of the processing inside a computer, executing instructions from programs.\n*   The CPU's performance is often measured in gigahertz (GHz).\n\n**2. Memory (RAM - Random Access Memory):**\n*   A form of volatile memory used to store working data and machine code. Data in RAM is lost when the power is turned off.\n*   The CPU can access data in RAM very quickly.\n\n**3. Storage (Hard Drive/SSD):**\n*   Non-volatile memory where software, documents, and other files are stored. Data here persists even when the power is off.\n*   Slower than RAM, but provides long-term storage.\n\n### How it Works Together: The Instruction Cycle\n\nThe basic operation of a computer is the instruction cycle (also known as the fetch-decode-execute cycle):\n1.  **Fetch:** The CPU retrieves an instruction from memory.\n2.  **Decode:** The CPU decodes the instruction to understand what action to perform.\n3.  **Execute:** The CPU performs the action. This might involve reading/writing from/to memory or performing a calculation.\n\n**Cache:** A smaller, faster memory closer to the CPU that stores copies of the data from frequently used main memory locations. It's used to reduce the average time to access data from the main memory.`
            }
        ]
      },
      {
        title: "Module 9: Cybersecurity",
        lessons: [
            { 
                slug: "cs-topic-cybersecurity", 
                title: "Cybersecurity: Protecting Our Digital World", 
                content: `### What is Cybersecurity?\n\nCybersecurity is the practice of protecting systems, networks, and programs from digital attacks. These cyberattacks are usually aimed at accessing, changing, or destroying sensitive information; extorting money from users; or interrupting normal business processes.\n\n### The CIA Triad\n\nA core model for guiding security policies:\n\n*   **Confidentiality:** Ensuring that data is accessible only to those with authorized access.\n*   **Integrity:** Maintaining the consistency, accuracy, and trustworthiness of data.\n*   **Availability:** Ensuring that systems and data are available to authorized users when needed.\n\n### Key Concepts\n\n**1. Encryption:**\n*   The process of converting data into a code to prevent unauthorized access. The data can only be read after it's been decrypted with a specific key.\n*   Used in HTTPS to secure web traffic.\n\n**2. Authentication:**\n*   The process of verifying the identity of a user or process. \n*   **Methods:** Passwords, biometrics (fingerprints), multi-factor authentication (MFA).\n\n**3. Firewalls:**\n*   A network security device that monitors incoming and outgoing network traffic and decides whether to allow or block specific traffic based on a defined set of security rules.\n\n**4. Common Attacks:**\n*   **Phishing:** Fraudulent attempts to obtain sensitive information by disguising as a trustworthy entity in an electronic communication.\n*   **Malware:** Malicious software designed to disrupt, damage, or gain unauthorized access to a computer system.\n*   **Denial-of-Service (DoS):** An attack meant to shut down a machine or network, making it inaccessible to its intended users.`
            }
        ]
      },
      {
        title: "Module 10: Artificial Intelligence & Machine Learning",
        lessons: [
            { 
                slug: "cs-topic-ai-ml", 
                title: "AI & Machine Learning: The Future of Tech", 
                content: `### What is Artificial Intelligence (AI)?\n\nAI is a broad area of computer science that makes computers seem like they have human intelligence. It is the science of training machines to learn, reason, and make decisions.\n\n### What is Machine Learning (ML)?\n\nMachine Learning is a subset of AI. It's the "learning" part. Instead of being explicitly programmed with rules, an ML system is trained on large amounts of data, which allows it to learn to make predictions or decisions.\n\n### Common Paradigms of Machine Learning\n\n**1. Supervised Learning:**\n*   The model is trained on **labeled data**. This means the training data includes the desired output (the "right answer").\n*   **Use cases:**\n    *   **Classification:** Predicting a category (e.g., "spam" or "not spam").\n    *   **Regression:** Predicting a continuous value (e.g., predicting a house price).\n\n**2. Unsupervised Learning:**\n*   The model is trained on **unlabeled data** and tries to find patterns on its own.\n*   **Use cases:**\n    *   **Clustering:** Grouping similar data points together (e.g., customer segmentation).\n    *   **Dimensionality Reduction:** Reducing the number of variables in a dataset.\n\n**3. Deep Learning:**\n*   A subfield of ML based on **artificial neural networks** with many layers (hence "deep").\n*   It has been particularly successful in areas like image recognition (Computer Vision) and natural language processing (NLP).`
            }
        ]
      }
    ]
  },
];

export function getCourses() {
  return courses;
}

export function getCourseBySlug(slug: string) {
  return courses.find(course => course.slug === slug);
}
