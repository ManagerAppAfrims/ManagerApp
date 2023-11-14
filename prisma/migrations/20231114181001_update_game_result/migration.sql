-- CreateEnum
CREATE TYPE "Result" AS ENUM ('win', 'loss', 'tie', 'undecided');

-- AlterTable
ALTER TABLE "Game" ADD COLUMN     "result" "Result" NOT NULL DEFAULT 'undecided';
