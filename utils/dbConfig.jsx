import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";
const sql = neon(
  "postgresql://kosfunds_owner:Bi0ZbuDcdU1k@ep-yellow-shape-a1tkil3d.ap-southeast-1.aws.neon.tech/kosfunds?sslmode=require"
);
export const db = drizzle(sql, { schema });
