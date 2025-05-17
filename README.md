# Digital Family Tree

A modern web application for creating and managing family trees digitally. Built with Next.js, React Flow, and Clerk authentication.

## Features

- Interactive family tree visualization
- User authentication and authorization
- Real-time updates
- Responsive design
- PostgreSQL database with Prisma ORM

## Tech Stack

- **Frontend**: Next.js + Tailwind CSS + React Flow
- **Backend**: Next.js API Routes
- **Database**: PostgreSQL via Prisma ORM
- **Auth**: Clerk.dev
- **Hosting**: Vercel + Railway/Supabase

## Getting Started

1. Clone the repository
2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file with the following variables:

   ```
   DATABASE_URL="postgresql://user:password@localhost:5432/digital_family_tree"
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="your_publishable_key"
   CLERK_SECRET_KEY="your_secret_key"
   ```

4. Set up the database:

   ```bash
   npx prisma generate
   npx prisma migrate dev
   ```

5. Run the development server:

   ```bash
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
digital-family-tree/
├── prisma/
│   └── schema.prisma         # DB schema
├── src/
│   ├── app/                  # Next.js app directory
│   │   ├── api/             # API routes
│   │   ├── dashboard/       # Dashboard page
│   │   └── page.tsx         # Home page
│   ├── components/          # React components
│   └── lib/                 # Utility functions
├── public/                  # Static assets
└── .env                     # Environment variables
```

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## License

This project is licensed under the MIT License.
