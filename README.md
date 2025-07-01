#  Sociogram - A Modern Social Media Platform

Sociogram is a full-stack social media application built using **Next.js**, **TypeScript**, **Tailwind CSS**, and **shadcn/ui**. It provides a smooth user experience with real-time features and a clean, responsive design.

---

##  Features

-  **Authentication with Clerk**  
   Seamless and secure user authentication using [Clerk](https://clerk.dev).

-  **Post Management**  
   - Create new posts  
   - Read existing posts  
   - Like and comment on posts

-  **Real-Time Notifications**  
   Users receive instant notifications when they are:
   - Followed
   - Liked
   - Commented on

-  **Follow System**  
   - Follow/unfollow other users  
   - View your followers and following list

-  **Follow Recommendations**  
   - Personalized suggestions for users you may want to follow

---

## 🛠 Tech Stack

| Tech           | Description                                   |
|----------------|-----------------------------------------------|
| **Next.js**    | React framework for server-side rendering and routing |
| **TypeScript** | Type-safe development                         |
| **Tailwind CSS** | Utility-first CSS for responsive UI        |
| **shadcn/ui**  | Beautiful, reusable components                |
| **Prisma**     | Modern ORM for database interaction           |
| **Neon DB**    | Serverless PostgreSQL database                |
| **Clerk**      | Authentication and user management            |

---

## ⚙️ Installation

### 1. **Clone the Repository**
```bash
git clone https://github.com/your-username/sociogram.git
cd sociogram
npm install
# or
yarn install

Create a .env file in the root directory and add the following:
DATABASE_URL=your_neon_db_connection_url
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
Replace placeholders with actual credentials from Neon and Clerk.

npx prisma db push
npm run dev
# or
yarn dev

The app will be running at http://localhost:3000
