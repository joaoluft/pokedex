import { Button } from "../../Components/Button"
import { InputText } from "../../Components/InputText"

export const Start = () => {
    return (
        <div>
            <InputText type="text" placeholder="Insira Seu Nome" />
            <Button>Iniciar</Button>
        </div>
    )
}