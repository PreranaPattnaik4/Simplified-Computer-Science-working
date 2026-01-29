
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
    description: 'A comprehensive course covering Python fundamentals and its advanced applications in data science and artificial intelligence. Perfect for aspiring data scientists and AI specialists.\n\nLearning Outcomes:\n- Apply Python fundamentals for complex data analysis.\n- Build and evaluate machine learning models using Scikit-learn.\n- Implement deep learning solutions with TensorFlow and Keras.\n- Create compelling data visualizations to communicate insights.\n- Deploy a machine learning model as a web service.',
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
                        cardContent: "Python's design philosophy emphasizes code readability and simplicity, making it ideal for the iterative nature of data science projects. Its gentle learning curve allows beginners to become productive quickly, while its powerful features support complex scientific computing tasks. Key Strengths: -   Vast Ecosystem: A rich collection of libraries like Pandas, NumPy, Matplotlib, Scikit-learn, TensorFlow, and PyTorch. -   Versatility: Handle everything from data extraction to model deployment within a single language. -   Strong Community: A massive global community provides extensive support and third-party packages."
                    },
                    {
                        cardTitle: "Setting Up Your Professional Environment",
                        cardSubtitle: "A well-configured environment is crucial for productivity and reproducibility.",
                        cardContent: "We will use Anaconda, the industry standard for Python data science. 1.  Install Anaconda: Download and install the Anaconda Distribution from the official website (https://www.anaconda.com/products/distribution). 2.  Create a Virtual Environment: To avoid dependency conflicts, create one for this course:    ```bash    conda create --name scs_python_course python=3.9    ``` 3.  Activate the Environment:    ```bash    conda activate scs_python_course    ``` 4.  Launch Jupyter Notebook: An interactive, web-based tool for data exploration.    ```bash    jupyter notebook    ```"
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
                        cardContent: "A variable is a symbolic name that is a reference or pointer to an object. Once an object is assigned to a variable, you can refer to the object by that name. ```python\nproject_name = 'AI Stock Predictor'\naccuracy_target = 0.95\nnum_features = 50\n```"
                    },
                    {
                        cardTitle: "Python's Primary Data Types",
                        cardSubtitle: "Understand the fundamental data types for representing different kinds of information.",
                        cardContent: "- `int` (Integer): For whole numbers (e.g., `num_features = 50`). - `float` (Floating-Point Number): For numbers with a decimal point (e.g., `accuracy_target = 0.95`). - `str` (String): For textual data. Enclosed in single `'...'` or double `\"...\"` quotes (e.g., `project_name = 'AI Stock Predictor'`). - `bool` (Boolean): For truth values `True` or `False` (e.g., `is_deployed = False`)."
                    },
                    {
                        cardTitle: "Data Structures: Collections of Data",
                        cardSubtitle: "Learn about the primary ways to group and organize data in Python.",
                        cardContent: "- `list`: An ordered, mutable (changeable) collection of items. `features = ['volume', 'price', 'moving_avg']` - `tuple`: An ordered, immutable (unchangeable) collection. `model_version = (1, 2, 0)` - `dict` (Dictionary): An unordered collection of key-value pairs. `hyperparameters = {'learning_rate': 0.01, 'epochs': 100}`"
                    },
                    {
                        cardTitle: "Real-World Scenario: Model Performance",
                        cardSubtitle: "See how variables and operators are used in a practical data science context.",
                        cardContent: "Imagine you're calculating the performance improvement of a new model. ```python\nold_model_accuracy = 0.88\nnew_model_accuracy = 0.91\nimprovement = ((new_model_accuracy - old_model_accuracy) / old_model_accuracy) * 100\nprint(f\"Model improvement: {improvement:.2f}%\")\nis_significant_improvement = improvement > 2.0\nneeds_ceo_approval = is_significant_improvement and new_model_accuracy > 0.9\nprint(f\"Does it need CEO approval? {needs_ceo_approval}\")\n```"
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
                        cardContent: "This is the primary way to make decisions in your code. Scenario: Classifying a stock as 'Buy', 'Hold', or 'Sell' based on an analyst's rating. ```python\nanalyst_rating = 4.2\nif analyst_rating >= 4.5:\n    recommendation = 'Strong Buy'\nelif analyst_rating >= 3.5:\n    recommendation = 'Hold'\nelse:\n    recommendation = 'Sell'\nprint(f\"Recommendation: {recommendation}\")\n```"
                    },
                    {
                        cardTitle: "`for` Loops: Iterating Over Sequences",
                        cardSubtitle: "Use `for` loops to perform an action on each item in a collection, such as a list.",
                        cardContent: "`for` loops are used when you have a collection of items (like a list of stocks) and you want to perform an action on each item. Scenario: Calculating the average price of a list of stocks. ```python\nstock_prices = [150.25, 152.50, 149.75, 155.00]\ntotal_price = 0\nfor price in stock_prices:\n    total_price += price\naverage_price = total_price / len(stock_prices)\nprint(f\"Average stock price: ${average_price:.2f}\")\n```"
                    },
                    {
                        cardTitle: "`while` Loops: Repeating Until a Condition is Met",
                        cardSubtitle: "Use `while` loops for situations where you need to repeat a task until a certain condition is no longer true.",
                        cardContent: "`while` loops are useful when you don't know in advance how many times you need to loop. Scenario: Simulating a stock price until it reaches a target. ```python\nimport random\ncurrent_price = 100\ntarget_price = 110\ndays = 0\nwhile current_price < target_price:\n    daily_change = random.uniform(-1, 1)\n    current_price += daily_change\n    days += 1\n    print(f\"Day {days}: Price = {current_price:.2f}\")\nprint(f\"Target price of ${target_price} reached in {days} days.\")\n```"
                    },
                    {
                        cardTitle: "Mastery Tip: List Comprehensions",
                        cardSubtitle: "Learn a concise, readable, and 'Pythonic' way to create lists.",
                        cardContent: "List comprehensions provide a more elegant syntax for creating new lists based on existing ones. Scenario: Filtering a list of stocks to find only those above a certain price. ```python\nprices = {'AAPL': 150, 'GOOG': 2800, 'MSFT': 300, 'AMZN': 3400}\nexpensive_stocks = [stock for stock, price in prices.items() if price > 1000]\nprint(expensive_stocks)\n```"
                    }
                ]
            }
        ]
    },
    {
        title: "Module 2: Machine Learning Fundamentals with Scikit-Learn",
        lessons: [
            {
                slug: 'intro-to-scikit-learn',
                title: 'Scikit-Learn: The Core of Practical ML in Python',
                content: [
                    {
                        cardTitle: "What is Scikit-learn?",
                        cardSubtitle: "Understand the role and strengths of Python's go-to machine learning library.",
                        cardContent: "Scikit-learn provides a simple and efficient tool for data mining and data analysis. It is built on NumPy, SciPy, and Matplotlib.\n\nKey Strengths:\n- Consistent API: A simple, predictable interface for all algorithms.\n- Comprehensive: Covers most traditional ML tasks like classification, regression, clustering, and dimensionality reduction.\n- Well-Documented: Excellent documentation and community support."
                    },
                    {
                        cardTitle: "The Scikit-learn API: A Consistent Pattern",
                        cardSubtitle: "Learn the 5-step pattern for using any model in Scikit-learn.",
                        cardContent: "Scikit-learn's key strength is its consistent API. This simple 5-step pattern is used across almost all models in the library, making it incredibly easy to experiment with different algorithms.\n\n1.  Choose a model: Import the class of the model you want to use.\n2.  Instantiate the model: Create an instance of the model with desired hyperparameters.\n3.  Arrange data: Arrange your data into a features matrix (X) and a target vector (y).\n4.  Fit the model: Train the model on your data using the `.fit()` method.\n5.  Predict: Use the trained model to make predictions on new data with the `.predict()` method."
                    },
                    {
                        cardTitle: "Code Example: Logistic Regression",
                        cardSubtitle: "See the 5-step pattern in action with a practical code example.",
                        cardContent: "```python\nfrom sklearn.linear_model import LogisticRegression\n\nmodel = LogisticRegression()\n\nmodel.fit(X_train, y_train)\n\npredictions = model.predict(X_test)\n```"
                    }
                ]
            },
        ]
    },
    {
      title: "Module 3: Final Assessment",
      lessons: [
        {
          slug: 'python-for-ds-final-quiz',
          title: 'Final Quiz: Python for Data Science',
          type: 'quiz',
          content: "Test your knowledge on Python for Data Science fundamentals.",
          questions: [
            {
              question: "Which of the following is the primary advantage of using a virtual environment in a Python project?",
              options: [
                { id: 'A', text: 'It makes your code run faster.' },
                { id: 'B', text: 'It isolates project dependencies to avoid conflicts.' },
                { id: 'C', 'text': 'It automatically formats your code.' },
                { id: 'D', 'text': 'It is required to use the Jupyter Notebook.' }
              ],
              correctAnswer: 'B',
              explanation: "Virtual environments create isolated spaces for each project, so the specific versions of libraries used in one project don't interfere with others."
            },
            {
              question: "A data scientist has a list of customer ages: `ages = [22, 35, 42, 28, 55, 35]`. What is the correct data structure to store unique ages, where the order doesn't matter?",
              options: [
                { id: 'A', text: 'A `list`' },
                { id: 'B', text: 'A `tuple`' },
                { id: 'C', 'text': 'A `set`' },
                { id: 'D', 'text': 'A `dict`' }
              ],
              correctAnswer: 'C',
              explanation: "A `set` is an unordered collection of unique items. It's the perfect data structure for this use case, as it will automatically handle duplicates."
            },
            {
              question: "What is the output of the following list comprehension?\n\n```python\nnumbers = [1, 2, 3, 4, 5]\nsquares = [n*n for n in numbers if n % 2 == 0]\nprint(squares)\n```",
              options: [
                { id: 'A', text: '[1, 4, 9, 16, 25]' },
                { id: 'B', text: '[2, 4]' },
                { id: 'C', 'text': '[4, 16]' },
                { id: 'D', 'text': '[1, 9, 25]' }
              ],
              correctAnswer: 'C',
              explanation: "The list comprehension iterates through `numbers`, checks if a number `n` is even (`n % 2 == 0`), and if so, it calculates its square (`n*n`). This applies only to 2 and 4, resulting in `[4, 16]`."
            },
            {
              question: "In Scikit-learn, which method is used to train a machine learning model on a dataset?",
              options: [
                { id: 'A', text: '`.predict()`' },
                { id: 'B', text: '`.train()`' },
                { id: 'C', 'text': '`.run()`' },
                { id: 'D', 'text': '`.fit()`' }
              ],
              correctAnswer: 'D',
              explanation: "The `.fit(X, y)` method is the standard Scikit-learn API for training a model, where `X` is the feature data and `y` is the target labels."
            },
            {
              question: "You want to classify an email as 'spam' or 'not spam'. Which type of machine learning problem is this?",
              options: [
                { id: 'A', text: 'Regression' },
                { id: 'B', text: 'Clustering' },
                { id: 'C', 'text': 'Classification' },
                { id: 'D', 'text': 'Reinforcement Learning' }
              ],
              correctAnswer: 'C',
              explanation: "Classification is a supervised learning task where the goal is to predict a categorical label. In this case, the labels are 'spam' and 'not spam'."
            },
            {
                question: "Which library is most commonly used for data manipulation and analysis in Pandas?",
                options: [
                  { id: 'A', text: 'NumPy' },
                  { id: 'B', text: 'Pandas' },
                  { id: 'C', 'text': 'Matplotlib' },
                  { id: 'D', 'text': 'Scikit-learn' }
                ],
                correctAnswer: 'B',
                explanation: "Pandas is the de-facto standard library for data manipulation in Python, providing powerful data structures like the DataFrame."
            },
            {
                question: "What does the `.fit()` method in a Scikit-learn model achieve?",
                options: [
                  { id: 'A', text: 'It makes predictions on new data.' },
                  { id: 'B', text: 'It evaluates the model\'s performance.' },
                  { id: 'C', 'text': 'It trains the model by learning patterns from the training data.' },
                  { id: 'D', 'text': 'It preprocesses the data.' }
                ],
                correctAnswer: 'C',
                explanation: "The `.fit()` method is the core training step where the model learns the relationships between the features and the target variable."
            },
            {
                question: "What is the primary purpose of a `while` loop?",
                options: [
                  { id: 'A', text: 'To iterate over a fixed sequence of items.' },
                  { id: 'B', text: 'To repeat a block of code as long as a certain condition is true.' },
                  { id: 'C', 'text': 'To define a reusable block of code.' },
                  { id: 'D', 'text': 'To make a single decision in the code.' }
                ],
                correctAnswer: 'B',
                explanation: "`while` loops are used for iteration that depends on a condition being met, rather than iterating over a pre-defined sequence."
            },
            {
                question: "Which data type would you use to store a collection of key-value pairs, like a user's profile with 'name' and 'email' keys?",
                options: [
                  { id: 'A', text: 'List' },
                  { id: 'B', text: 'Tuple' },
                  { id: 'C', 'text': 'Set' },
                  { id: 'D', 'text': 'Dictionary' }
                ],
                correctAnswer: 'D',
                explanation: "A dictionary (`dict`) is designed specifically for storing data as key-value pairs, making it ideal for structured data like a user profile."
            },
            {
                question: "An ML engineer is building a model to predict customer churn. They have their feature data in a Pandas DataFrame `X` and the target labels (0 for no churn, 1 for churn) in a Series `y`. They have chosen a `RandomForestClassifier`. What is the correct Scikit-learn code to train this model?",
                options: [
                  { id: 'A', text: '`from sklearn.ensemble import RandomForestClassifier\nmodel = RandomForestClassifier()\nmodel.train(X, y)`' },
                  { id: 'B', text: '`from sklearn.ensemble import RandomForestClassifier\nmodel = RandomForestClassifier()\nmodel.fit(X, y)`' },
                  { id: 'C', 'text': '`from sklearn.ensemble import RandomForestClassifier\nmodel = RandomForestClassifier(X, y)\nmodel.fit()`' },
                  { id: 'D', 'text': '`from sklearn.ensemble import RandomForestClassifier\nmodel = RandomForestClassifier.fit(X, y)`' }
                ],
                correctAnswer: 'B',
                explanation: 'The standard Scikit-learn API pattern for training a model is to first instantiate the model object (`model = RandomForestClassifier()`) and then call the `.fit()` method on that object with the training data (`model.fit(X, y)`). The other options misuse the API.'
            }
          ]
        }
      ]
    }
  ]
  },
   {
    slug: 'cs-basics-get-started',
    title: 'Computer Science Basics: Everything You Need to Know to Get Started',
    description: 'This course will introduce you to the essential concepts, key terminology, and foundational topics that make up the heart of Computer Science.\n\nLearning Outcomes:\n- Explain the fundamental pillars of Computer Science.\n- Write basic programs using core programming concepts.\n- Understand how computer hardware and software interact.\n- Describe the basics of web technology and the internet.',
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
                    content: "Objective: Define Computer Science and understand that it's more than just programming. Computer Science is the Science of Problem-Solving. At its heart, Computer Science (CS) is the study of how to solve problems using computers. It's a field that blends logic, creativity, and engineering. While programming is the tool we use to implement solutions, CS is about designing those solutions in the first place. It encompasses: - Theory: The fundamental principles of computation and information. - Design: How to structure software and hardware systems. - Application: Creating useful tools and technologies that impact the world."
                },
                { 
                    slug: "key-areas-of-cs", 
                    title: "Key Areas of Computer Science", 
                    content: "Objective: Get a high-level overview of the major disciplines within Computer Science. Computer Science is a vast field with many specializations. Here are some of the core pillars: 1.  Algorithms & Data Structures: The study of efficient problem-solving methods and ways to organize data. 2.  Programming Languages: The tools we use to communicate instructions to computers. 3.  Computer Architecture: The design and structure of computer hardware systems. 4.  Operating Systems: The software that manages all hardware and software resources. 5.  Computer Networks: The principles behind how computers connect and communicate (e.g., the Internet). 6.  Databases: How to store, manage, and retrieve large amounts of data efficiently. 7.  Artificial Intelligence (AI): The science of creating machines that can think, learn, and act intelligently."
                }
            ]
        },
        {
            title: "Module 2: Speaking to Computers - Programming Fundamentals",
            lessons: [
                { 
                    slug: "programming-intro", 
                    title: "Introduction to Programming with Python", 
                    content: "Objective: Understand the role of a programming language and write your first lines of code using Python. Why Start with Python? Python is famous for its simple and readable syntax, which looks a lot like plain English. This makes it an ideal first language for beginners, allowing you to focus on learning programming concepts without getting bogged down by complex rules. Your First Program: \"Hello, World!\" It's a tradition in programming to start by making the computer say \"Hello, World!\". In Python, it's just one line: ```python print(\"Hello, World!\") ``` This simple command tells the computer to call the `print` function and give it the text \"Hello, World!\" to display on the screen."
                },
                { 
                    slug: "variables-data-types", 
                    title: "Variables and Data Types", 
                    content: "Objective: Learn how to store and categorize information in a program. What are Variables? A variable is like a labeled box where you can store a piece of information. You give it a name and put a value inside it. ```python\nmessage = \"Welcome to CS Basics!\"\nstudent_count = 50\n``` Common Data Types - String (`str`): Text (e.g., `\"Hello\"`). - Integer (`int`): Whole numbers (e.g., `101`). - Float (`float`): Numbers with decimals (e.g., `99.9`). - Boolean (`bool`): `True` or `False`. Python automatically figures out the data type for you when you assign a value to a variable."
                }
            ]
        },
        {
            title: "Module 3: Final Assessment",
            lessons: [
                {
                    slug: 'cs-basics-final-quiz',
                    title: 'Final Quiz: Computer Science Basics',
                    type: 'quiz',
                    content: "Test your knowledge on the fundamental concepts of Computer Science.",
                    questions: [
                        {
                            question: "Which of the following best describes the primary goal of Computer Science?",
                            options: [
                                { id: 'A', text: 'To learn as many programming languages as possible.' },
                                { id: 'B', text: 'To design efficient and effective solutions to problems using computation.' },
                                { id: 'C', 'text': 'To build faster computer hardware.' },
                                { id: 'D', 'text': 'To become an expert in using specific software applications like Microsoft Word.' }
                            ],
                            correctAnswer: 'B',
                            explanation: "Computer Science is fundamentally about problem-solving. While learning languages and understanding hardware are parts of it, the central goal is to design computational solutions to problems."
                        },
                        {
                            question: 'A programmer writes the following code: `age = 25`. What is the data type of the `age` variable in Python?',
                            options: [
                                { id: 'A', text: 'String' },
                                { id: 'B', text: 'Float' },
                                { id: 'C', 'text': 'Integer' },
                                { id: 'D', 'text': 'Boolean' }
                            ],
                            correctAnswer: 'C',
                            explanation: "The value `25` is a whole number, so Python assigns it the integer (`int`) data type. A string would be in quotes (e.g., `\"25\"`), a float would have a decimal (e.g., `25.0`), and a boolean would be `True` or `False`."
                        },
                        {
                            question: "Which of these is NOT considered a core pillar of Computer Science?",
                            options: [
                                { id: 'A', text: 'Algorithms & Data Structures' },
                                { id: 'B', text: 'Operating Systems' },
                                { id: 'C', 'text': 'Marketing and Sales' },
                                { id: 'D', 'text': 'Computer Networks' }
                            ],
                            correctAnswer: 'C',
                            explanation: "Marketing and Sales are business functions, not core technical disciplines of Computer Science. Algorithms, OS, and Networks are all fundamental areas of study in CS."
                        },
                        {
                            question: "What is the main purpose of a variable in programming?",
                            options: [
                                { id: 'A', text: 'To end the program.' },
                                { id: 'B', text: 'To print text to the screen.' },
                                { id: 'C', 'text': 'To store a piece of information with a name.' },
                                { id: 'D', 'text': 'To perform a mathematical calculation.' }
                            ],
                            correctAnswer: 'C',
                            explanation: "A variable acts as a named container or label for a value, allowing programmers to store and refer to information throughout a program."
                        },
                        {
                            question: "What will the following Python code output?\n\n```python\nprint(\"Hello, World!\")\n```",
                            options: [
                                { id: 'A', text: '`Hello, World!` with quotes.' },
                                { id: 'B', text: '`Hello, World!` without quotes.' },
                                { id: 'C', 'text': 'An error, because it is too simple.' },
                                { id: 'D', 'text': 'Nothing will be printed.' }
                            ],
                            correctAnswer: 'B',
                            explanation: "The `print()` function in Python displays the given text (or value) to the screen. The quotes are used to define the string but are not part of the output."
                        },
                        {
                            question: "Which of the following data types would you use to represent a student's GPA, like 3.8?",
                            options: [
                                { id: 'A', text: 'Integer (int)' },
                                { id: 'B', text: 'Float (float)' },
                                { id: 'C', 'text': 'String (str)' },
                                { id: 'D', 'text': 'Boolean (bool)' }
                            ],
                            correctAnswer: 'B',
                            explanation: "A float is used for numbers that have a decimal point, making it the correct choice for representing a GPA."
                        },
                        {
                            question: "The study of efficient problem-solving methods is known as:",
                            options: [
                                { id: 'A', text: 'Computer Architecture' },
                                { id: 'B', text: 'Databases' },
                                { id: 'C', 'text': 'Algorithms & Data Structures' },
                                { id: 'D', 'text': 'Artificial Intelligence' }
                            ],
                            correctAnswer: 'C',
                            explanation: "Algorithms and Data Structures is the area of computer science focused on designing and analyzing efficient procedures for solving problems."
                        },
                        {
                            question: "What is the data type for a value that can only be `True` or `False`?",
                            options: [
                                { id: 'A', text: 'Integer' },
                                { id: 'B', text: 'String' },
                                { id: 'C', 'text': 'Boolean' },
                                { id: 'D', 'text': 'Float' }
                            ],
                            correctAnswer: 'C',
                            explanation: "The Boolean (`bool`) data type is used to represent truth values, which can only be `True` or `False`."
                        },
                        {
                            question: "Which area of Computer Science deals with managing a computer's hardware and software resources?",
                            options: [
                                { id: 'A', text: 'Programming Languages' },
                                { id: 'B', text: 'Operating Systems' },
                                { id: 'C', 'text': 'Databases' },
                                { id: 'D', 'text': 'Computer Networks' }
                            ],
                            correctAnswer: 'B',
                            explanation: "An Operating System (OS) is responsible for managing all hardware (like CPU and memory) and software resources on a computer."
                        },
                        {
                            question: "Why is Python often recommended as a first programming language for beginners?",
                            options: [
                                { id: 'A', text: 'It is the fastest programming language.' },
                                { id: 'B', text: 'It has a simple, readable syntax similar to English.' },
                                { id: 'C', 'text': 'It can only be used for building websites.' },
                                { id: 'D', 'text': 'It is the oldest programming language.' }
                            ],
                            correctAnswer: 'B',
                            explanation: "Python's clear and readable syntax allows beginners to focus on learning programming concepts without being overwhelmed by complex rules, making it an excellent first language."
                        }
                    ]
                }
            ]
        }
    ]
  },
  {
    slug: 'web-dev-guide',
    title: 'The Ultimate Guide to Website Development with Coding',
    description: 'A complete guide covering everything from front-end and back-end development to full-stack technologies, security best practices, and performance optimization.\n\nLearning Outcomes:\n- Build structured and semantic web pages with HTML.\n- Style modern, responsive layouts using CSS, Flexbox, and Grid.\n- Add interactivity to websites using JavaScript and the DOM.\n- Develop a complete full-stack MERN application (MongoDB, Express, React, Node.js).\n- Deploy a web application to a live server.',
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
                    content: "Objective: Understand the role of HTML and learn to create well-structured, semantic web pages. What is HTML? HyperText Markup Language (HTML) is the standard markup language for documents designed to be displayed in a web browser. It is the backbone of every website. Core Concepts - Elements & Tags: HTML consists of elements, which are represented by tags. For example, `<p>` is a tag for a paragraph element. - Document Structure: Every HTML document has a basic structure:  ```html  <!DOCTYPE html>  <html>  <head>    <title>Page Title</title>  </head>  <body>    <h1>This is a Heading</h1>    <p>This is a paragraph.</p>  </body>  </html>  ``` - Semantic HTML: Using HTML tags that describe the meaning of the content, such as `<header>`, `<footer>`, `<nav>`, and `<article>`. This is crucial for accessibility and SEO."
                },
                {
                    slug: "css-styling",
                    title: "CSS: The Art of Styling",
                    content: "Objective: Learn how to use Cascading Style Sheets (CSS) to control the visual appearance of your website. What is CSS? CSS is a stylesheet language used to describe the presentation of a document written in HTML. It controls colors, fonts, spacing, layout, and more. Core Concepts - Selectors: Target specific HTML elements to apply styles to. (e.g., `p`, `.my-class`, `#my-id`). - Properties & Values: `color: blue;` `font-size: 16px;` - The Box Model: Every HTML element is a rectangular box. The box model describes the content, padding, border, and margin of this box. - Layouts with Flexbox & Grid: Modern CSS provides powerful tools for creating complex, responsive layouts. Flexbox is for one-dimensional layouts (rows or columns), while Grid is for two-dimensional layouts (rows and columns)."
                }
            ]
        },
        {
            title: "Module 2: Building Interactivity with JavaScript",
            lessons: [
                {
                    slug: "js-fundamentals",
                    title: "JavaScript Fundamentals",
                    content: "Objective: Learn the core concepts of the JavaScript language, the engine of dynamic websites. What is JavaScript? JavaScript (JS) is a programming language that allows you to implement complex features on web pages. Every time a web page does more than just sit there and display static information for you to look at — displaying timely content updates, interactive maps, animated 2D/3D graphics, scrolling video jukeboxes, etc. — you can bet that JavaScript is probably involved. Core Concepts - Variables: `let`, `const`. - Data Types: String, Number, Boolean, Array, Object. - Operators: Arithmetic, Comparison, Logical. - Control Flow: `if/else`, `for` loops, `while` loops. - Functions: Reusable blocks of code."
                },
                {
                    slug: "dom-manipulation",
                    title: "Interacting with the Page: The DOM",
                    content: "Objective: Learn how to use JavaScript to manipulate the Document Object Model (DOM) to create dynamic and interactive user experiences. What is the DOM? The DOM is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects; that way, programming languages can connect to the page. Common Tasks - Selecting Elements: `document.getElementById('myId')`, `document.querySelector('.myClass')`. - Changing Content: `element.textContent = 'New text!'`. - Changing Styles: `element.style.color = 'red'`. - Event Handling: Responding to user actions like clicks and key presses. `element.addEventListener('click', myFunction)`."
                }
            ]
        },
        {
            title: "Module 3: Final Assessment",
            lessons: [
                {
                    slug: 'web-dev-final-quiz',
                    title: 'Final Quiz: Web Development Fundamentals',
                    type: 'quiz',
                    content: "Test your knowledge on the core concepts of web development.",
                    questions: [
                        {
                            question: 'A developer wants to create a navigation bar at the top of their page that contains a list of links. What is the most semantic HTML structure for this?',
                            options: [
                                { id: 'A', text: '`<div><ul><li><a href=\"#\">Home</a></li></ul></div>`' },
                                { id: 'B', text: '`<nav><ul><li><a href=\"#\">Home</a></li></ul></nav>`' },
                                { id: 'C', 'text': '`<span><p><a href=\"#\">Home</a></p></span>`' },
                                { id: 'D', 'text': '`<section><ul><li><a href=\"#\">Home</a></li></ul></section>`' }
                            ],
                            correctAnswer: 'B',
                            explanation: 'The `<nav>` tag is the most semantic choice because it explicitly tells the browser and screen readers that this section of the page is for navigation.'
                        },
                        {
                            question: 'A developer wants to change the text of a paragraph with the ID `welcome-message` to "Welcome!" when a button with the ID `login-btn` is clicked. Which JavaScript snippet correctly accomplishes this?',
                            options: [
                                { id: 'A', text: '`document.getElementById(\"login-btn\").addEventListener(\"click\", () => {\\n  document.getElementById(\"welcome-message\").textContent = \"Welcome!\";\\n});`' },
                                { id: 'B', text: '`document.querySelector(\"#login-btn\").onClick = {\\n  document.querySelector(\"#welcome-message\").innerHTML = \"Welcome!\";\\n};`' },
                                { id: 'C', 'text': '`document.getElementById(\"welcome-message\").textContent = \"Welcome!\";`' },
                                { id: 'D', 'text': '`#login-btn.click(() => {\\n  #welcome-message.text(\"Welcome!\");\\n});`' }
                            ],
                            correctAnswer: 'A',
                            explanation: 'Option A correctly uses `addEventListener` to listen for a click event on the button. When the event occurs, it executes a function that selects the paragraph by its ID and updates its `textContent`.'
                        },
                        {
                            question: "Which technology is responsible for the styling and visual presentation of a webpage?",
                            options: [
                                { id: 'A', text: 'HTML' },
                                { id: 'B', text: 'CSS' },
                                { id: 'C', 'text': 'JavaScript' },
                                { id: 'D', 'text': 'SQL' }
                            ],
                            correctAnswer: 'B',
                            explanation: "CSS (Cascading Style Sheets) is used to control the layout, colors, fonts, and overall visual appearance of HTML elements."
                        },
                        {
                            question: "What is the primary purpose of 'semantic HTML'?",
                            options: [
                                { id: 'A', text: 'To make the website look more colorful.' },
                                { id: 'B', text: 'To use tags that describe the meaning of the content, improving accessibility and SEO.' },
                                { id: 'C', 'text': 'To make the HTML code shorter.' },
                                { id: 'D', 'text': 'To load the website faster.' }
                            ],
                            correctAnswer: 'B',
                            explanation: "Semantic tags like `<header>`, `<nav>`, and `<article>` give meaning to the content, which helps search engines and screen readers understand the structure and importance of different parts of the page."
                        },
                        {
                            question: "In CSS, what does the 'box model' consist of?",
                            options: [
                                { id: 'A', text: 'Width, Height, and Color' },
                                { id: 'B', text: 'Flexbox, Grid, and Position' },
                                { id: 'C', 'text': 'Content, Padding, Border, and Margin' },
                                { id: 'D', 'text': 'Header, Footer, and Body' }
                            ],
                            correctAnswer: 'C',
                            explanation: "The CSS box model describes the rectangular boxes that are generated for elements. It consists of the content area, surrounded by padding, a border, and a margin."
                        },
                        {
                            question: "What is the Document Object Model (DOM)?",
                            options: [
                                { id: 'A', text: 'A style sheet language for web pages.' },
                                { id: 'B', text: 'A server-side programming language.' },
                                { id: 'C', 'text': 'A programming interface for web documents that represents the page as a tree of objects.' },
                                { id: 'D', 'text': 'A type of database for storing website content.' }
                            ],
                            correctAnswer: 'C',
                            explanation: "The DOM is an object-based representation of the HTML document, which allows programming languages like JavaScript to dynamically interact with and modify the page's content and structure."
                        },
                        {
                            question: "Which JavaScript keyword is used to declare a variable that cannot be reassigned?",
                            options: [
                                { id: 'A', text: '`var`' },
                                { id: 'B', text: '`let`' },
                                { id: 'C', 'text': '`const`' },
                                { id: 'D', 'text': '`static`' }
                            ],
                            correctAnswer: 'C',
                            explanation: "The `const` keyword is used to declare a constant, which is a block-scoped variable whose value cannot be changed or redeclared."
                        },
                        {
                            question: "What is the purpose of a `function` in JavaScript?",
                            options: [
                                { id: 'A', text: 'To store a single value.' },
                                { id: 'B', text: 'To create a reusable block of code that performs a specific task.' },
                                { id: 'C', 'text': 'To loop over a collection of items.' },
                                { id: 'D', 'text': 'To apply styles to HTML elements.' }
                            ],
                            correctAnswer: 'B',
                            explanation: "Functions allow you to encapsulate a piece of logic into a named block that can be executed multiple times, promoting code reuse and organization."
                        },
                        {
                            question: "What does the 'C' in CSS stand for?",
                            options: [
                                { id: 'A', text: 'Creative' },
                                { id: 'B', text: 'Computer' },
                                { id: 'C', 'text': 'Cascading' },
                                { id: 'D', 'text': 'Colorful' }
                            ],
                            correctAnswer: 'C',
                            explanation: "CSS stands for Cascading Style Sheets. The 'Cascading' part refers to the rules that determine how styles are applied when multiple style rules apply to the same element."
                        },
                        {
                            question: "Which HTML tag is used to create a hyperlink?",
                            options: [
                                { id: 'A', text: '`<link>`' },
                                { id: 'B', text: '`<a>`' },
                                { id: 'C', 'text': '`<hlink>`' },
                                { id: 'D', 'text': '`<url>`' }
                            ],
                            correctAnswer: 'B',
                            explanation: "The `<a>` (anchor) tag, along with its `href` attribute, is used to create hyperlinks to other web pages or locations within the same page."
                        }
                    ]
                }
            ]
        }
    ]
  },
  {
    slug: 'cs-top-10-topics',
    title: 'The 10 Most Important Topics in Computer Science',
    description: 'A comprehensive course covering the 10 most important topics that form the backbone of computer science, from algorithms to AI.\n\nLearning Outcomes:\n- Explain the function and importance of core data structures and algorithms.\n- Describe the roles of an operating system and a computer network.\n- Differentiate between various programming paradigms.\n- Understand the fundamentals of software engineering, cybersecurity, and AI.',
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
        title: "Module 1: Algorithms & Data Structures",
        lessons: [
            { 
                slug: "cs-topic-algorithms", 
                title: "Algorithms: The Foundation of Computation", 
                content: `What is an Algorithm?
An algorithm is a step-by-step procedure for solving a problem or accomplishing a task. In computer science, it's a sequence of instructions a computer follows to transform input into output. Think of it as a recipe: a finite set of clear steps to achieve a specific outcome.

Why They Matter
Algorithms are the heart of computer science. The efficiency of an algorithm can make the difference between an application that runs in milliseconds and one that takes hours. Understanding algorithms is key to writing efficient and scalable code.

Measuring Efficiency: Big O Notation
We use Big O Notation to analyze the performance of an algorithm. It describes how the runtime or memory usage grows as the input size (\`n\`) increases.
- O(1) - Constant Time: The time taken is the same, regardless of input size. (e.g., accessing an array element at a known index).
- O(log n) - Logarithmic Time: Runtime grows logarithmically. Very efficient. (e.g., Binary Search).
- O(n) - Linear Time: Runtime grows linearly with the input size. (e.g., searching an unsorted list).
- O(n²) - Quadratic Time: Runtime grows quadratically. Becomes slow very quickly. (e.g., Bubble Sort).`
            },
            { 
                slug: "cs-topic-data-structures", 
                title: "Data Structures: Organizing Information for Efficiency", 
                content: "What are Data Structures?\nData structures are formats for organizing, managing, and storing data that enable efficient access and modification. The choice of data structure can have a massive impact on an algorithm's performance.\n\nCommon Data Structures\n- Arrays: A simple collection of items stored in contiguous memory locations. Offers fast access by index (O(1)).\n- Linked Lists: A sequence of nodes where each node points to the next. Allows for efficient insertions and deletions.\n- Stacks: A Last-In, First-Out (LIFO) structure. Think of a stack of plates. Used for managing function calls and undo features.\n- Queues: A First-In, First-Out (FIFO) structure. Like a checkout line. Used for managing tasks and requests.\n- Trees: A hierarchical structure with a root node and child nodes. Used for file systems and databases.\n- Graphs: A collection of nodes (vertices) and edges connecting them. Used to model networks like social media connections or road maps.\n- Hash Tables (or Dictionaries): A structure that maps keys to values for highly efficient lookups. Often provides O(1) average time complexity for insertion, deletion, and retrieval."
            }
        ]
      },
       {
        title: "Module 2: Systems & Architecture",
        lessons: [
            { 
                slug: "cs-topic-os", 
                title: "Operating Systems: The Computer's Manager", 
                content: "An Operating System (OS) is the software that manages all of the computer's hardware and software resources. It acts as an intermediary between the user and the computer hardware. Examples include Windows, macOS, and Linux.\n\nCore Responsibilities:\n- Process Management: Manages the execution of programs (processes) and scheduling of tasks.\n- Memory Management: Allocates and deallocates RAM to various processes.\n- File System Management: Organizes and keeps track of files and directories on storage devices.\n- Device Management: Controls hardware devices through drivers."
            },
            { 
                slug: "cs-topic-networks", 
                title: "Computer Networks: Connecting the World", 
                content: "Computer networking is the practice of connecting computers together to share data and resources. The internet is the largest example of a computer network.\n\nKey Concepts:\n- TCP/IP Model: The foundational protocol suite of the internet. It defines how data is broken into packets, addressed, transmitted, routed, and received.\n- HTTP/HTTPS: The protocol used for viewing web pages in a browser. HTTPS is the secure, encrypted version.\n- DNS (Domain Name System): The internet's phonebook. It translates human-readable domain names (like `google.com`) into computer-readable IP addresses."
            }
        ]
      },
      {
        title: "Module 3: Software & Databases",
        lessons: [
            { 
                slug: "cs-topic-databases", 
                title: "Databases: Storing and Retrieving Data", 
                content: "Databases are systems for storing and retrieving data efficiently. A Database Management System (DBMS) is the software used to manage the database.\n\nTypes of Databases:\n- Relational (SQL): Organizes data into structured tables with rows and columns. Uses SQL (Structured Query Language). Examples: MySQL, PostgreSQL.\n- Non-Relational (NoSQL): Provides more flexibility and is often used for large-scale or unstructured data. Examples: MongoDB (document-based), Redis (key-value)."
            }
        ]
      },
      {
          title: "Module 4: Final Assessment",
          lessons: [
            {
                slug: 'cs-topics-final-quiz',
                title: 'Final Quiz: Core CS Topics',
                type: 'quiz',
                content: "Test your knowledge on the most important topics in Computer Science.",
                questions: [
                    {
                        question: 'An algorithm needs to find a specific name in a phone book containing 1,000,000 sorted names. Which search algorithm would be most efficient, and what is its Big O complexity?',
                        options: [
                            { id: 'A', text: 'Linear Search, O(n)' },
                            { id: 'B', text: 'Binary Search, O(log n)' },
                            { id: 'C', 'text': 'Bubble Sort, O(n²)' },
                            { id: 'D', 'text': 'A hash map lookup, O(1)' }
                        ],
                        correctAnswer: 'B',
                        explanation: 'Because the names in a phone book are sorted, Binary Search is the most efficient algorithm. It works by repeatedly dividing the search interval in half. Its time complexity is O(log n), which is incredibly fast for large datasets.'
                    },
                    {
                        question: 'You are designing a feature for a music app that allows users to go back to the previously played song. Which data structure is best suited for managing the song history for this "back" button functionality?',
                        options: [
                            { id: 'A', text: 'Queue' },
                            { id: 'B', text: 'Stack' },
                            { id: 'C', 'text': 'Array' },
                            { id: 'D', 'text': 'Linked List' }
                        ],
                        correctAnswer: 'B',
                        explanation: 'A Stack is the perfect data structure for this. As a new song is played, you "push" it onto the stack. When the user hits the "back" button, you "pop" the most recently played song off the stack to reveal the previous one. This is a classic Last-In, First-Out (LIFO) problem.'
                    },
                    {
                        question: "Which of the following is a primary responsibility of an Operating System?",
                        options: [
                            { id: 'A', text: 'Translating domain names to IP addresses.' },
                            { id: 'B', text: 'Managing memory allocation for programs.' },
                            { id: 'C', 'text': 'Styling the content of a webpage.' },
                            { id: 'D', 'text': 'Storing data in relational tables.' }
                        ],
                        correctAnswer: 'B',
                        explanation: "Operating Systems are responsible for core functions like memory management, process scheduling, and controlling hardware devices. DNS translation is a network function."
                    },
                    {
                        question: "What does DNS (Domain Name System) do?",
                        options: [
                            { id: 'A', text: 'It secures web traffic using encryption.' },
                            { id: 'B', text: 'It translates human-readable domain names (e.g., google.com) into computer-readable IP addresses.' },
                            { id: 'C', 'text': 'It manages the layout of a webpage.' },
                            { id: 'D', 'text': 'It stores and retrieves large amounts of data.' }
                        ],
                        correctAnswer: 'B',
                        explanation: "DNS acts like the internet's phonebook, converting easy-to-remember domain names into the numerical IP addresses that computers use to identify each other."
                    },
                    {
                        question: "Which database type uses a flexible, non-tabular structure and is often used for large-scale or unstructured data?",
                        options: [
                            { id: 'A', text: 'Relational (SQL)' },
                            { id: 'B', text: 'NoSQL' },
                            { id: 'C', 'text': 'Hierarchical' },
                            { id: 'D', 'text': 'Network' }
                        ],
                        correctAnswer: 'B',
                        explanation: "NoSQL databases (like MongoDB or Redis) are designed for flexibility and scalability, making them well-suited for handling diverse and large datasets that don't fit neatly into the rigid table structure of SQL databases."
                    },
                    {
                        question: "What is the time complexity of accessing an element in an array at a specific index?",
                        options: [
                            { id: 'A', text: 'O(1)' },
                            { id: 'B', text: 'O(n)' },
                            { id: 'C', 'text': 'O(log n)' },
                            { id: 'D', 'text': 'O(n²)' }
                        ],
                        correctAnswer: 'A',
                        explanation: "Accessing an array element by its index is a constant time operation, O(1), because the memory location can be calculated directly from the base address and the index, regardless of the array's size."
                    },
                    {
                        question: "Which data structure follows a First-In, First-Out (FIFO) principle?",
                        options: [
                            { id: 'A', text: 'Stack' },
                            { id: 'B', text: 'Queue' },
                            { id: 'C', 'text': 'Tree' },
                            { id: 'D', 'text': 'Hash Table' }
                        ],
                        correctAnswer: 'B',
                        explanation: "A Queue operates like a waiting line. The first item added to the queue is the first one to be removed, following the FIFO principle."
                    },
                    {
                        question: "What is the main advantage of using a Hash Table (or Dictionary) for data retrieval?",
                        options: [
                            { id: 'A', text: 'It keeps the data sorted automatically.' },
                            { id: 'B', text: 'It uses very little memory.' },
                            { id: 'C', 'text': 'It provides very fast average time for lookups, insertions, and deletions.' },
                            { id: 'D', 'text': 'It is the best structure for hierarchical data.' }
                        ],
                        correctAnswer: 'C',
                        explanation: "Hash Tables use a hash function to map keys to indices in an array, allowing for average-case O(1) time complexity for data retrieval, which is extremely efficient."
                    },
                    {
                        question: "Which of these protocols is the foundation of the World Wide Web, used for fetching web pages?",
                        options: [
                            { id: 'A', text: 'FTP (File Transfer Protocol)' },
                            { id: 'B', text: 'SMTP (Simple Mail Transfer Protocol)' },
                            { id: 'C', 'text': 'TCP/IP' },
                            { id: 'D', 'text': 'HTTP (Hypertext Transfer Protocol)' }
                        ],
                        correctAnswer: 'D',
                        explanation: "HTTP is the application-layer protocol used by web browsers to request and receive web page data from servers."
                    },
                    {
                        question: "If you need to model a social network where users are nodes and friendships are edges, what data structure would be most appropriate?",
                        options: [
                            { id: 'A', text: 'A Tree' },
                            { id: 'B', text: 'A Stack' },
                            { id: 'C', 'text': 'A Graph' },
                            { id: 'D', 'text': 'A Queue' }
                        ],
                        correctAnswer: 'C',
                        explanation: "A Graph is the ideal data structure for representing networks, as it consists of vertices (nodes) and edges that connect them, perfectly modeling relationships like friendships."
                    }
                ]
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
