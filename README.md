# Family Tree 👨‍👩‍👧‍👦

A modern web application for visualizing and managing a Chinese-style **族谱 (Zupu)** — a digital family genealogy record. Inspired by traditional family practices, this tool allows remote family members to collaboratively update and maintain their shared lineage.

## Features

- 📜 Digitized multi-generational family tree visualization
- 🌐 Accessible remotely — ideal for families spread across regions
- 🧑‍🤝‍🧑 Add, edit, or delete members and relationships
- 🔐 Authentication and role-based access (viewer/editor/admin)
- 🖨️ [Planned] Export printable PDF of family tree (Zupu)

## Tech Stack

- **Frontend**: Next.js, Tailwind CSS, React Flow
- **Backend**: Prisma ORM + Supabase (PostgreSQL)
- **Auth**: Clerk (or Supabase Auth alternative)
- **Deployment**: Vercel

## Getting Started

### 1. Clone and install dependencies

```bash
git clone https://github.com/cufesimonwang/family-tree.git
cd family-tree
npm install
```

### 2. Configure environment variables

Copy the example config and fill in your values:

```bash
cp .env.example .env
```

Make sure to set:

- `DATABASE_URL` (from Supabase)
- `NEXT_PUBLIC_CLERK_FRONTEND_API` and `CLERK_SECRET_KEY` (from Clerk dashboard)

### 3. Initialize the database

```bash
npx prisma generate
npx prisma migrate dev --name init
```

### 4. Run the development server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the app.

---

## Roadmap

- [x] Backend setup with Prisma + Supabase
- [x] Graph visualization using React Flow
- [ ] Add member UI + forms
- [ ] Auth-gated dashboard with roles
- [ ] Export family tree to printable PDF
- [ ] Mobile-friendly layout

---

## License

This project is currently under development by [@cufesimonwang](https://github.com/cufesimonwang). Feel free to fork or suggest contributions!