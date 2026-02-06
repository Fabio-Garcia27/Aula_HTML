import { AddForm } from "@/src/components/add-form";
import { Header } from "@/src/components/header";

export default function Page() {
    return (
        <div>
            <Header />
            <section>
                <AddForm/>
            </section>
        </div>
    )
}