export const site = {
  name: "Harit Chetty",
  email: "chettiharit@gmail.com",
  location: "Madison, WI",
  intro:
    "I build systems, data tools, and small interfaces that make technical work easier to understand.",
  subIntro:
    "Computer Science + Data Science graduate from UW–Madison. Interested in software engineering, infrastructure, ML systems, and practical developer tools.",
  links: [
    { label: "GitHub", href: "https://github.com/" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/haritchetty/" },
    { label: "Resume", href: "/resume.pdf" },
    { label: "Email", href: "mailto:chettiharit@gmail.com" }
  ]
};

export const projects = [
  {
    slug: "minispark",
    title: "MiniSpark",
    eyebrow: "C · Linux · pthreads",
    year: "2025",
    summary:
      "A simplified Spark-like execution engine for partitioned datasets and transformation pipelines.",
    details:
      "MiniSpark executes MapReduce-style transformations on a single node using worker threads, a global task queue, locks, and condition variables. The project focuses on scheduling partition-level work as dependencies become available and materializing a DAG of transformations in the correct order.",
    role: "Systems implementation",
    stack: ["C", "pthreads", "Linux", "DAG traversal", "synchronization"],
    links: [{ label: "GitHub", href: "https://github.com/" }],
    demo: "Later: add a tiny visual DAG runner showing how transformations become scheduled partition tasks."
  },
  {
    slug: "unix-shell",
    title: "Unix-based Shell",
    eyebrow: "C · Linux · processes",
    year: "2025",
    summary:
      "A Unix-style shell with process creation, pipelines, redirection, variables, and command history.",
    details:
      "This shell parses user input in interactive and batch modes, executes built-ins and external commands, routes file descriptors for chained pipelines, handles I/O redirection, expands variables, and searches executable paths hierarchically.",
    role: "Low-level systems project",
    stack: ["C", "Linux syscalls", "fork/exec", "pipes", "file descriptors"],
    links: [{ label: "GitHub", href: "https://github.com/" }],
    demo: "Later: add a browser terminal mock that replays commands and explains how pipes/file descriptors move data."
  },
  {
    slug: "grpc-inference-server",
    title: "Concurrent gRPC Inference Server",
    eyebrow: "Python · gRPC · PyTorch · Docker",
    year: "2025",
    summary:
      "A model-serving service with concurrent clients, cached predictions, batched inputs, and model updates.",
    details:
      "The server defines a Protocol Buffers interface, handles remote prediction requests over gRPC, protects shared model/cache state with explicit locking, invalidates stale cache entries on model update, and serves concurrent clients through a thread pool.",
    role: "Backend + ML systems",
    stack: ["Python", "gRPC", "Protobuf", "PyTorch", "Docker", "LRU cache"],
    links: [{ label: "GitHub", href: "https://github.com/" }],
    demo: "Later: embed a small request/response playground with cached vs uncached timing states."
  },
  {
    slug: "database-buffer-manager",
    title: "Database Buffer Manager",
    eyebrow: "C++ · database internals",
    year: "2024",
    summary:
      "Storage-layer database components for page allocation, pinning, replacement, and heap scans.",
    details:
      "A database internals project focused on buffer-frame management, page lifecycle behavior, heap-file access patterns, scan state, and replacement decisions. The work connects high-level database operations to the lower-level page management that makes them possible.",
    role: "Database systems",
    stack: ["C++", "buffer pools", "heap files", "page pinning", "replacement policy"],
    links: [{ label: "GitHub", href: "https://github.com/" }],
    demo: "Later: add a page-cache visualizer showing pins, misses, and evictions over a query trace."
  }
];

export const work = [
  {
    title: "Computer Aided Engineering Consultant",
    place: "UW–Madison College of Engineering",
    time: "Sep 2021 — Aug 2025",
    note:
      "Resolved computing issues for engineering students, faculty, and staff; maintained lab hardware; supported onboarding for newer consultants."
  },
  {
    title: "Cashier and Donations Assistant",
    place: "Goodwill Industries",
    time: "Oct 2019 — Mar 2020",
    note:
      "Customer-facing work involving donations, register operations, and merchandise flow."
  }
];

export const education = [
  {
    title: "B.S. Computer Science + Data Science",
    place: "University of Wisconsin–Madison",
    time: "Sep 2021 — May 2025",
    note: "Coursework and projects across operating systems, databases, UI, AI, and data systems."
  }
];
