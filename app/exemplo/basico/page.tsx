import Button from "@/components/button"
import Input from "@/components/input"
import TitleDescription from "@/components/TitleDescription";

export default function Home() {

    return (
        <div>
            <TitleDescription></TitleDescription>
            <Button cor="white" corText="blue" corBorda="blue"> Um Botão</Button>
            <Input />
        </div>
    );


}