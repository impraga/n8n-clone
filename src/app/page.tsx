import { cn } from "@/lib/utils";
import prisma from "@/lib/db";

const Home = async () => {
  let users = await prisma.user.findMany();
  
  return (
    <div className={cn("text-red-500 font-extrabold")}>
      {JSON.stringify(users)}
    </div>
  );
}


export default Home;