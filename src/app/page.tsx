import { DropdownMenu } from "@/components/ui/dropdown-menu";

const classes = {
  main: "font-[family-name:var(--font-ubuntu-mono)] border border-green-500 h-[100vh] w-[100vw]",
};

export default function Home() {
  return (
    <main className={classes.main}>
      <DropdownMenu>
        <div>test 1</div>
        <div>test 2</div>
        <div>test 3</div>
        <div>test 4</div>
      </DropdownMenu>
    </main>
  );
}
