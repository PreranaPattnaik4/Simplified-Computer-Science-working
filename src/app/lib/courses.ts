
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
    description: 'A comprehensive course covering Python fundamentals and its advanced applications in data science and artificial intelligence. Perfect for aspiring data scientists and AI specialists.\n\n**Learning Outcomes:**\n- Apply Python fundamentals for complex data analysis.\n- Build and evaluate machine learning models using Scikit-learn.\n- Implement deep learning solutions with TensorFlow and Keras.\n- Create compelling data visualizations to communicate insights.\n- Deploy a machine learning model as a web service.',
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
        title: "Module 1: Python Fundamentals for Data Science",
        lessons: [
            { 
                slug: "python-for-ds-overview", 
                title: "Why Python for Data Science?",
                content: [
                    {
                        cardTitle: "Why Python for Data Science?",
                        cardSubtitle: "Understand Python's dominant role in the data science ecosystem.",
                        cardContent: "Python's design philosophy emphasizes code readability and simplicity, making it ideal for the iterative nature of data science projects. Its gentle learning curve allows beginners to become productive quickly, while its powerful features support complex scientific computing tasks.\n\n*   **Key Strengths:**\n    *   **Vast Ecosystem:** A rich collection of libraries like Pandas, NumPy, Matplotlib, Scikit-learn, TensorFlow, and PyTorch.\n    *   **Versatility:** Handle everything from data extraction to model deployment within a single language.\n    *   **Strong Community:** A massive global community provides extensive support and third-party packages."
                    },
                    {
                        cardTitle: "Setting Up Your Professional Environment",
                        cardSubtitle: "A well-configured environment is crucial for productivity and reproducibility.",
                        cardContent: "We will use Anaconda, the industry standard for Python data science.\n\n1.  **Install Anaconda:** Download and install the Anaconda Distribution from the [official website](https://www.anaconda.com/products/distribution).\n2.  **Create a Virtual Environment:** To avoid dependency conflicts, create one for this course:\n    ```bash\n    conda create --name scs_python_course python=3.9\n    ```\n3.  **Activate the Environment:**\n    ```bash\n    conda activate scs_python_course\n    ```\n4.  **Launch Jupyter Notebook:** An interactive, web-based tool for data exploration.\n    ```bash\n    jupyter notebook\n    ```"
                    },
                    {
                        cardTitle: "Industry Best Practice: Virtual Environments",
                        cardSubtitle: "A key tip for managing projects effectively and ensuring reproducibility.",
                        cardContent: "Always create a separate virtual environment for each new project using tools like `conda` or `venv`. This isolates your project's dependencies, prevents conflicts between projects, and ensures that your work is reproducible by others who can install the exact same package versions."
                    }
                ]
            },
            { 
                slug: "python-core-concepts", 
                title: "Core Python: Variables, Data Types, and Operators",
                content: [
                    {
                        cardTitle: "Variables: Naming Your Data",
                        cardSubtitle: "Learn how to store information in Python using variables.",
                        cardContent: "A variable is a symbolic name that is a reference or pointer to an object. Once an object is assigned to a variable, you can refer to the object by that name.\n\n```python\n# Variable assignment\nproject_name = 'AI Stock Predictor'\naccuracy_target = 0.95\nnum_features = 50\n```"
                    },
                    {
                        cardTitle: "Python's Primary Data Types",
                        cardSubtitle: "Understand the fundamental data types for representing different kinds of information.",
                        cardContent: "*   **`int` (Integer):** For whole numbers (e.g., `num_features = 50`).\n*   **`float` (Floating-Point Number):** For numbers with a decimal point (e.g., `accuracy_target = 0.95`).\n*   **`str` (String):** For textual data. Enclosed in single `'...'` or double `\"...\"` quotes (e.g., `project_name = 'AI Stock Predictor'`).\n*   **`bool` (Boolean):** For truth values `True` or `False` (e.g., `is_deployed = False`)."
                    },
                    {
                        cardTitle: "Data Structures: Collections of Data",
                        cardSubtitle: "Learn about the primary ways to group and organize data in Python.",
                        cardContent: "*   **`list`:** An ordered, mutable (changeable) collection of items. `features = ['volume', 'price', 'moving_avg']`\n*   **`tuple`:** An ordered, immutable (unchangeable) collection. `model_version = (1, 2, 0)`\n*   **`dict` (Dictionary):** An unordered collection of key-value pairs. `hyperparameters = {'learning_rate': 0.01, 'epochs': 100}`"
                    },
                    {
                        cardTitle: "Real-World Scenario: Model Performance",
                        cardSubtitle: "See how variables and operators are used in a practical data science context.",
                        cardContent: "Imagine you're calculating the performance improvement of a new model.\n```python\n# Model performance data\nold_model_accuracy = 0.88\nnew_model_accuracy = 0.91\n\n# Calculate the percentage improvement\nimprovement = ((new_model_accuracy - old_model_accuracy) / old_model_accuracy) * 100\n\n# The f-string is a modern and readable way to format strings\nprint(f\"Model improvement: {improvement:.2f}%\")\n\n# Decision-making with logical operators\nis_significant_improvement = improvement > 2.0\nneeds_ceo_approval = is_significant_improvement and new_model_accuracy > 0.9\n\nprint(f\"Does it need CEO approval? {needs_ceo_approval}\")\n```"
                    }
                ]
            },
            { 
                slug: "python-control-flow", 
                title: "Logic and Control Flow", 
                content: [
                    {
                        cardTitle: "Conditional Logic with `if`, `elif`, `else`",
                        cardSubtitle: "Learn to make decisions and execute different code paths based on specific conditions.",
                        cardContent: "This is the primary way to make decisions in your code.\n\n**Scenario:** Classifying a stock as 'Buy', 'Hold', or 'Sell' based on an analyst's rating.\n```python\nanalyst_rating = 4.2  # On a scale of 1 to 5\n\nif analyst_rating >= 4.5:\n    recommendation = 'Strong Buy'\nelif analyst_rating >= 3.5:\n    recommendation = 'Hold'\nelse:\n    recommendation = 'Sell'\n\nprint(f\"Recommendation: {recommendation}\") # Output: Recommendation: Hold\n```"
                    },
                    {
                        cardTitle: "`for` Loops: Iterating Over Sequences",
                        cardSubtitle: "Use `for` loops to perform an action on each item in a collection, such as a list.",
                        cardContent: "`for` loops are used when you have a collection of items (like a list of stocks) and you want to perform an action on each item.\n\n**Scenario:** Calculating the average price of a list of stocks.\n```python\nstock_prices = [150.25, 152.50, 149.75, 155.00]\ntotal_price = 0\n\nfor price in stock_prices:\n    total_price += price\n\naverage_price = total_price / len(stock_prices)\nprint(f\"Average stock price: ${average_price:.2f}\")\n```"
                    },
                    {
                        cardTitle: "`while` Loops: Repeating Until a Condition is Met",
                        cardSubtitle: "Use `while` loops for situations where you need to repeat a task until a certain condition is no longer true.",
                        cardContent: "`while` loops are useful when you don't know in advance how many times you need to loop.\n\n**Scenario:** Simulating a stock price until it reaches a target.\n```python\nimport random\n\ncurrent_price = 100\ntarget_price = 110\ndays = 0\n\nwhile current_price < target_price:\n    # Simulate a random daily change between -1 and +1\n    daily_change = random.uniform(-1, 1)\n    current_price += daily_change\n    days += 1\n    print(f\"Day {days}: Price = {current_price:.2f}\")\n\nprint(f\"Target price of ${target_price} reached in {days} days.\")\n```"
                    },
                    {
                        cardTitle: "Mastery Tip: List Comprehensions",
                        cardSubtitle: "Learn a concise, readable, and 'Pythonic' way to create lists.",
                        cardContent: "List comprehensions provide a more elegant syntax for creating new lists based on existing ones.\n\n**Scenario:** Filtering a list of stocks to find only those above a certain price.\n```python\nprices = {'AAPL': 150, 'GOOG': 2800, 'MSFT': 300, 'AMZN': 3400}\n\n# Find stocks with price > 1000\nexpensive_stocks = [stock for stock, price in prices.items() if price > 1000]\n\nprint(expensive_stocks) # Output: ['GOOG', 'AMZN']\n```"
                    }
                ]
            },
            {
                slug: 'python-module-1-quiz',
                title: 'Module 1 Quiz',
                type: 'quiz',
                content: 'A data analyst has a list of customer satisfaction scores: `scores = [5, 4, 5, 3, 2, 5, 4, 2]`. They need to calculate the average score but only for scores that are 3 or higher. Which code snippet correctly performs this calculation?',
                options: [
                    { id: 'A', text: '`filtered_scores = [s for s in scores if s >= 3] \nprint(sum(filtered_scores) / len(filtered_scores))`' },
                    { id: 'B', text: '`total = 0\nfor s in scores:\n  if s > 3:\n    total += s\nprint(total / len(scores))`' },
                    { id: 'C', text: '`filtered_scores = scores.filter(s > 3)\nprint(sum(filtered_scores) / len(filtered_scores))`' },
                    { id: 'D', text: '`total = sum(scores)\ncount = len(scores)\nprint(total / count)`' }
                ],
                correctAnswer: 'A',
                explanation: 'Option A is the most Pythonic and correct solution. It uses a list comprehension to first filter the list for scores >= 3, and then calculates the average of that new, filtered list. Option B has a logic error (it divides by the length of the original list). Option C uses a non-existent `.filter()` method for lists. Option D calculates the average of all scores, not the filtered ones.'
            }
        ]
    },
    {
        title: "Module 2: Machine Learning Fundamentals with Scikit-Learn",
        lessons: [
            { 
                slug: 'intro-to-scikit-learn', 
                title: 'Scikit-Learn: The Core of Practical ML in Python', 
                content: '### Objective\nUnderstand the architecture and core principles of Scikit-learn, the go-to library for traditional machine learning in Python.\n\n### What is Scikit-learn?\nScikit-learn provides a simple and efficient tool for data mining and data analysis. It is built on NumPy, SciPy, and Matplotlib. Its key strength is its consistent and easy-to-use API.\n\n### The Scikit-learn API: A Consistent Pattern\n1.  **Choose a model:** Import the class of the model you want to use.\n2.  **Instantiate the model:** Create an instance of the model with desired hyperparameters.\n3.  **Arrange data:** Arrange your data into a features matrix (X) and a target vector (y).\n4.  **Fit the model:** Train the model on your data using the `.fit()` method.\n5.  **Predict:** Use the trained model to make predictions on new data with the `.predict()` method.\n\n```python\nfrom sklearn.linear_model import LogisticRegression\n\n# 1 & 2: Choose and instantiate the model\nmodel = LogisticRegression()\n\n# 3: Arrange data (X_train, y_train are assumed to be ready)\n# 4: Fit the model\n# model.fit(X_train, y_train)\n\n# 5: Predict on new data\n# predictions = model.predict(X_test)\n```\nThis simple pattern is used across almost all models in the library, making it incredibly easy to experiment with different algorithms.' 
            },
            {
                slug: 'ml-quiz-1',
                title: 'Module 2 Quiz: Model Training',
                type: 'quiz',
                content: 'An ML engineer is building a model to predict customer churn. They have their feature data in a Pandas DataFrame `X` and the target labels (0 for no churn, 1 for churn) in a Series `y`. They have chosen a `RandomForestClassifier`. What is the correct Scikit-learn code to train this model?',
                options: [
                    { id: 'A', text: '`from sklearn.ensemble import RandomForestClassifier\nmodel = RandomForestClassifier()\nmodel.train(X, y)`' },
                    { id: 'B', text: '`from sklearn.ensemble import RandomForestClassifier\nmodel = RandomForestClassifier()\nmodel.fit(X, y)`' },
                    { id: 'C', text: '`from sklearn.ensemble import RandomForestClassifier\nmodel = RandomForestClassifier(X, y)\nmodel.fit()`' },
                    { id: 'D', text: '`from sklearn.ensemble import RandomForestClassifier\nmodel = RandomForestClassifier.fit(X, y)`' }
                ],
                correctAnswer: 'B',
                explanation: 'The standard Scikit-learn API pattern for training a model is to first instantiate the model object (`model = RandomForestClassifier()`) and then call the `.fit()` method on that object with the training data (`model.fit(X, y)`). The other options misuse the API.'
            }
        ]
    }
]
  },
   {
    slug: 'cs-basics-get-started',
    title: 'Computer Science Basics: Everything You Need to Know to Get Started',
    description: 'This course will introduce you to the essential concepts, key terminology, and foundational topics that make up the heart of Computer Science.\n\n**Learning Outcomes:**\n- Explain the fundamental pillars of Computer Science.\n- Write basic programs using core programming concepts.\n- Understand how computer hardware and software interact.\n- Describe the basics of web technology and the internet.',
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
            title: "Module 1: The World of Computer Science",
            lessons: [
                { 
                    slug: "what-is-cs", 
                    title: "What is Computer Science?",
                    content: "### Objective\nDefine Computer Science and understand that it's more than just programming.\n\n### Computer Science is the Science of Problem-Solving\nAt its heart, Computer Science (CS) is the study of how to solve problems using computers. It's a field that blends logic, creativity, and engineering. While programming is the tool we use to implement solutions, CS is about designing those solutions in the first place.\n\nIt encompasses:\n- **Theory:** The fundamental principles of computation and information.\n- **Design:** How to structure software and hardware systems.\n- **Application:** Creating useful tools and technologies that impact the world."
                },
                { 
                    slug: "key-areas-of-cs", 
                    title: "Key Areas of Computer Science",
                    content: "### Objective\nGet a high-level overview of the major disciplines within Computer Science.\n\nComputer Science is a vast field with many specializations. Here are some of the core pillars:\n\n1.  **Algorithms & Data Structures:** The study of efficient problem-solving methods and ways to organize data.\n2.  **Programming Languages:** The tools we use to communicate instructions to computers.\n3.  **Computer Architecture:** The design and structure of computer hardware systems.\n4.  **Operating Systems:** The software that manages all hardware and software resources.\n5.  **Computer Networks:** The principles behind how computers connect and communicate (e.g., the Internet).\n6.  **Databases:** How to store, manage, and retrieve large amounts of data efficiently.\n7.  **Artificial Intelligence (AI):** The science of creating machines that can think, learn, and act intelligently."
                },
                {
                    slug: 'cs-basics-quiz-1',
                    title: 'Module 1 Quiz',
                    type: 'quiz',
                    content: 'Which of the following best describes the primary goal of Computer Science?',
                    options: [
                        { id: 'A', text: 'To learn as many programming languages as possible.' },
                        { id: 'B', text: 'To design efficient and effective solutions to problems using computation.' },
                        { id: 'C', text: 'To build faster computer hardware.' },
                        { id: 'D', text: 'To become an expert in using specific software applications like Microsoft Word.' }
                    ],
                    correctAnswer: 'B',
                    explanation: 'Computer Science is fundamentally about problem-solving. While learning languages and understanding hardware are parts of it, the central goal is to design computational solutions to problems. It is a creative and analytical discipline, not just a technical skill.'
                }
            ]
        },
        {
            title: "Module 2: Speaking to Computers - Programming Fundamentals",
            lessons: [
                { 
                    slug: "programming-intro", 
                    title: "Introduction to Programming with Python", 
                    content: "### Objective\nUnderstand the role of a programming language and write your first lines of code using Python.\n\n### Why Start with Python?\nPython is famous for its simple and readable syntax, which looks a lot like plain English. This makes it an ideal first language for beginners, allowing you to focus on learning programming concepts without getting bogged down by complex rules.\n\n### Your First Program: \"Hello, World!\"\nIt's a tradition in programming to start by making the computer say \"Hello, World!\". In Python, it's just one line:\n```python\nprint(\"Hello, World!\")\n```\nThis simple command tells the computer to call the `print` function and give it the text \"Hello, World!\" to display on the screen."
                },
                { 
                    slug: "variables-data-types", 
                    title: "Variables and Data Types", 
                    content: "### Objective\nLearn how to store and categorize information in a program.\n\n### What are Variables?\nA variable is like a labeled box where you can store a piece of information. You give it a name and put a value inside it.\n```python\n# 'message' is the variable name, \"Welcome to CS Basics!\" is the value.\nmessage = \"Welcome to CS Basics!\"\nstudent_count = 50\n```\n\n### Common Data Types\n- **String (`str`):** Text (e.g., `\"Hello\"`).\n- **Integer (`int`):** Whole numbers (e.g., `101`).\n- **Float (`float`):** Numbers with decimals (e.g., `99.9`).\n- **Boolean (`bool`):** `True` or `False`.\n\nPython automatically figures out the data type for you when you assign a value to a variable."
                },
                {
                    slug: 'cs-basics-quiz-2',
                    title: 'Module 2 Quiz',
                    type: 'quiz',
                    content: 'A programmer writes the following code: `age = 25`. What is the data type of the `age` variable?',
                    options: [
                        { id: 'A', text: 'String' },
                        { id: 'B', text: 'Float' },
                        { id: 'C', text: 'Integer' },
                        { id: 'D', text: 'Boolean' }
                    ],
                    correctAnswer: 'C',
                    explanation: 'The value `25` is a whole number, so Python assigns it the integer (`int`) data type. A string would be in quotes (e.g., `"25"`), a float would have a decimal (e.g., `25.0`), and a boolean would be `True` or `False`.'
                }
            ]
        }
    ]
  },
  {
    slug: 'web-dev-guide',
    title: 'The Ultimate Guide to Website Development with Coding',
    description: 'A complete guide covering everything from front-end and back-end development to full-stack technologies, security best practices, and performance optimization.\n\n**Learning Outcomes:**\n- Build structured and semantic web pages with HTML.\n- Style modern, responsive layouts using CSS, Flexbox, and Grid.\n- Add interactivity to websites using JavaScript and the DOM.\n- Develop a complete full-stack MERN application (MongoDB, Express, React, Node.js).\n- Deploy a web application to a live server.',
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
            title: "Module 1: Front-End Foundations",
            lessons: [
                {
                    slug: "html-structure",
                    title: "HTML: The Skeleton of the Web",
                    content: "### Objective\nUnderstand the role of HTML and learn to create well-structured, semantic web pages.\n\n### What is HTML?\nHyperText Markup Language (HTML) is the standard markup language for documents designed to be displayed in a web browser. It is the backbone of every website.\n\n### Core Concepts\n- **Elements & Tags:** HTML consists of elements, which are represented by tags. For example, `<p>` is a tag for a paragraph element.\n- **Document Structure:** Every HTML document has a basic structure:\n  ```html\n  <!DOCTYPE html>\n  <html>\n  <head>\n    <title>Page Title</title>\n  </head>\n  <body>\n    <h1>This is a Heading</h1>\n    <p>This is a paragraph.</p>\n  </body>\n  </html>\n  ```\n- **Semantic HTML:** Using HTML tags that describe the meaning of the content, such as `<header>`, `<footer>`, `<nav>`, and `<article>`. This is crucial for accessibility and SEO."
                },
                {
                    slug: "css-styling",
                    title: "CSS: The Art of Styling",
                    content: "### Objective\nLearn how to use Cascading Style Sheets (CSS) to control the visual appearance of your website.\n\n### What is CSS?\nCSS is a stylesheet language used to describe the presentation of a document written in HTML. It controls colors, fonts, spacing, layout, and more.\n\n### Core Concepts\n- **Selectors:** Target specific HTML elements to apply styles to. (e.g., `p`, `.my-class`, `#my-id`).\n- **Properties & Values:** `color: blue;` `font-size: 16px;`\n- **The Box Model:** Every HTML element is a rectangular box. The box model describes the content, padding, border, and margin of this box.\n- **Layouts with Flexbox & Grid:** Modern CSS provides powerful tools for creating complex, responsive layouts. **Flexbox** is for one-dimensional layouts (rows or columns), while **Grid** is for two-dimensional layouts (rows and columns)."
                },
                {
                    slug: 'web-dev-quiz-1',
                    title: 'Module 1 Quiz',
                    type: 'quiz',
                    content: 'A developer wants to create a navigation bar at the top of their page that contains a list of links. What is the most *semantic* HTML structure for this?',
                    options: [
                        { id: 'A', text: '`<div><ul><li><a href=\"#\">Home</a></li></ul></div>`' },
                        { id: 'B', text: '`<nav><ul><li><a href=\"#\">Home</a></li></ul></nav>`' },
                        { id: 'C', text: '`<span><p><a href=\"#\">Home</a></p></span>`' },
                        { id: 'D', text: '`<section><ul><li><a href=\"#\">Home</a></li></ul></section>`' }
                    ],
                    correctAnswer: 'B',
                    explanation: 'The `<nav>` tag is the most semantic choice because it explicitly tells the browser and screen readers that this section of the page is for navigation. While other tags might work visually, `<nav>` provides important context about the content\'s purpose.'
                }
            ]
        },
        {
            title: "Module 2: Building Interactivity with JavaScript",
            lessons: [
                {
                    slug: "js-fundamentals",
                    title: "JavaScript Fundamentals",
                    content: "### Objective\nLearn the core concepts of the JavaScript language, the engine of dynamic websites.\n\n### What is JavaScript?\nJavaScript (JS) is a programming language that allows you to implement complex features on web pages. Every time a web page does more than just sit there and display static information for you to look at — displaying timely content updates, interactive maps, animated 2D/3D graphics, scrolling video jukeboxes, etc. — you can bet that JavaScript is probably involved.\n\n### Core Concepts\n- **Variables:** `let`, `const`.\n- **Data Types:** String, Number, Boolean, Array, Object.\n- **Operators:** Arithmetic, Comparison, Logical.\n- **Control Flow:** `if/else`, `for` loops, `while` loops.\n- **Functions:** Reusable blocks of code."
                },
                {
                    slug: "dom-manipulation",
                    title: "Interacting with the Page: The DOM",
                    content: "### Objective\nLearn how to use JavaScript to manipulate the Document Object Model (DOM) to create dynamic and interactive user experiences.\n\n### What is the DOM?\nThe DOM is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects; that way, programming languages can connect to the page.\n\n### Common Tasks\n- **Selecting Elements:** `document.getElementById('myId')`, `document.querySelector('.myClass')`.\n- **Changing Content:** `element.textContent = 'New text!'`.\n- **Changing Styles:** `element.style.color = 'red'`.\n- **Event Handling:** Responding to user actions like clicks and key presses. `element.addEventListener('click', myFunction)`."
                },
                 {
                    slug: 'web-dev-quiz-2',
                    title: 'Module 2 Quiz',
                    type: 'quiz',
                    content: 'A developer wants to change the text of a paragraph with the ID `welcome-message` to "Welcome!" when a button with the ID `login-btn` is clicked. Which JavaScript snippet correctly accomplishes this?',
                    options: [
                        { id: 'A', text: '`document.getElementById(\"login-btn\").addEventListener(\"click\", () => {\n  document.getElementById(\"welcome-message\").textContent = \"Welcome!\";\n});`' },
                        { id: 'B', text: '`document.querySelector(\"#login-btn\").onClick = {\n  document.querySelector(\"#welcome-message\").innerHTML = \"Welcome!\";\n};`' },
                        { id: 'C', text: '`document.getElementById(\"welcome-message\").textContent = \"Welcome!\";`' },
                        { id: 'D', text: '`#login-btn.click(() => {\n  #welcome-message.text(\"Welcome!\");\n});`' }
                    ],
                    correctAnswer: 'A',
                    explanation: 'Option A correctly uses `addEventListener` to listen for a click event on the button. When the event occurs, it executes a function that selects the paragraph by its ID and updates its `textContent`. Option B has incorrect syntax for an event handler. Option C changes the text immediately, not on a button click. Option D uses jQuery-like syntax, not standard JavaScript.'
                }
            ]
        }
    ]
  },
  {
    slug: 'cs-top-10-topics',
    title: 'The 10 Most Important Topics in Computer Science',
    description: 'A comprehensive course covering the 10 most important topics that form the backbone of computer science, from algorithms to AI.\n\n**Learning Outcomes:**\n- Explain the function and importance of core data structures and algorithms.\n- Describe the roles of an operating system and a computer network.\n- Differentiate between various programming paradigms.\n- Understand the fundamentals of software engineering, cybersecurity, and AI.',
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
                title: "Algorithms: The Foundation of Computation", 
                content: `### What is an Algorithm?\nAn algorithm is a step-by-step procedure for solving a problem or accomplishing a task. In computer science, it's a sequence of instructions a computer follows to transform input into output. Think of it as a recipe: a finite set of clear steps to achieve a specific outcome.\n\n### Why They Matter\nAlgorithms are the heart of computer science. The efficiency of an algorithm can make the difference between an application that runs in milliseconds and one that takes hours. Understanding algorithms is key to writing efficient and scalable code.\n\n### Measuring Efficiency: Big O Notation\nWe use **Big O Notation** to analyze the performance of an algorithm. It describes how the runtime or memory usage grows as the input size (\`n\`) increases.\n- **O(1) - Constant Time:** The time taken is the same, regardless of input size. (e.g., accessing an array element at a known index).\n- **O(log n) - Logarithmic Time:** Runtime grows logarithmically. Very efficient. (e.g., Binary Search).\n- **O(n) - Linear Time:** Runtime grows linearly with the input size. (e.g., searching an unsorted list).\n- **O(n²) - Quadratic Time:** Runtime grows quadratically. Becomes slow very quickly. (e.g., Bubble Sort).`
            },
             {
                slug: 'cs-topics-quiz-1',
                title: 'Algorithms Quiz',
                type: 'quiz',
                content: 'An algorithm needs to find a specific name in a phone book containing 1,000,000 sorted names. Which search algorithm would be most efficient, and what is its Big O complexity?',
                options: [
                    { id: 'A', text: 'Linear Search, O(n)' },
                    { id: 'B', text: 'Binary Search, O(log n)' },
                    { id: 'C', text: 'Bubble Sort, O(n²)' },
                    { id: 'D', text: 'A hash map lookup, O(1)' }
                ],
                correctAnswer: 'B',
                explanation: 'Because the names in a phone book are sorted, Binary Search is the most efficient algorithm. It works by repeatedly dividing the search interval in half. Its time complexity is O(log n), which is incredibly fast for large datasets. Linear Search (O(n)) would be far too slow.'
            }
        ]
      },
      {
        title: "Module 2: Data Structures",
        lessons: [
            { 
                slug: "cs-topic-data-structures", 
                title: "Data Structures: Organizing Information for Efficiency", 
                content: `### What are Data Structures?\nData structures are formats for organizing, managing, and storing data that enable efficient access and modification. The choice of data structure can have a massive impact on an algorithm's performance.\n\n### Common Data Structures\n- **Arrays:** A simple collection of items stored in contiguous memory locations. Offers fast access by index (O(1)).\n- **Linked Lists:** A sequence of nodes where each node points to the next. Allows for efficient insertions and deletions.\n- **Stacks:** A Last-In, First-Out (LIFO) structure. Think of a stack of plates. Used for managing function calls and undo features.\n- **Queues:** A First-In, First-Out (FIFO) structure. Like a checkout line. Used for managing tasks and requests.\n- **Trees:** A hierarchical structure with a root node and child nodes. Used for file systems and databases.\n- **Graphs:** A collection of nodes (vertices) and edges connecting them. Used to model networks like social media connections or road maps.\n- **Hash Tables (or Dictionaries):** A structure that maps keys to values for highly efficient lookups. Often provides O(1) average time complexity for insertion, deletion, and retrieval.`
            },
            {
                slug: 'cs-topics-quiz-2',
                title: 'Data Structures Quiz',
                type: 'quiz',
                content: 'You are designing a feature for a music app that allows users to go back to the previously played song. Which data structure is best suited for managing the song history for this "back" button functionality?',
                options: [
                    { id: 'A', text: 'Queue' },
                    { id: 'B', text: 'Stack' },
                    { id: 'C', text: 'Array' },
                    { id: 'D', text: 'Linked List' }
                ],
                correctAnswer: 'B',
                explanation: 'A Stack is the perfect data structure for this. As a new song is played, you "push" it onto the stack. When the user hits the "back" button, you "pop" the most recently played song off the stack to reveal the previous one. This is a classic Last-In, First-Out (LIFO) problem.'
            }
        ]
      },
       {
        title: "Module 3: Operating Systems",
        lessons: [
            { 
                slug: "cs-topic-os", 
                title: "Operating Systems: The Computer's Manager", 
                content: "An Operating System (OS) is the software that manages all of the computer's hardware and software resources. It acts as an intermediary between the user and the computer hardware. Examples include Windows, macOS, and Linux.\n\n### Core Responsibilities:\n- **Process Management:** Manages the execution of programs (processes) and scheduling of tasks.\n- **Memory Management:** Allocates and deallocates RAM to various processes.\n- **File System Management:** Organizes and keeps track of files and directories on storage devices.\n- **Device Management:** Controls hardware devices through drivers."
            }
        ]
      },
       {
        title: "Module 4: Computer Networks",
        lessons: [
            { 
                slug: "cs-topic-networks", 
                title: "Computer Networks: Connecting the World", 
                content: "Computer networking is the practice of connecting computers together to share data and resources. The internet is the largest example of a computer network.\n\n### Key Concepts:\n- **TCP/IP Model:** The foundational protocol suite of the internet. It defines how data is broken into packets, addressed, transmitted, routed, and received.\n- **HTTP/HTTPS:** The protocol used for viewing web pages in a browser. HTTPS is the secure, encrypted version.\n- **DNS (Domain Name System):** The internet's phonebook. It translates human-readable domain names (like `google.com`) into computer-readable IP addresses."
            }
        ]
      },
      {
        title: "Module 5: Databases",
        lessons: [
            { 
                slug: "cs-topic-databases", 
                title: "Databases: Storing and Retrieving Data", 
                content: "Databases are systems for storing and retrieving data efficiently. A Database Management System (DBMS) is the software used to manage the database.\n\n### Types of Databases:\n- **Relational (SQL):** Organizes data into structured tables with rows and columns. Uses SQL (Structured Query Language). Examples: MySQL, PostgreSQL.\n- **Non-Relational (NoSQL):** Provides more flexibility and is often used for large-scale or unstructured data. Examples: MongoDB (document-based), Redis (key-value)."
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
