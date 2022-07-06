import { render, fireEvent} from "@testing-library/react-native";
import App from "../../../App";
jest.mock("react-native/Libraries/Animated/NativeAnimatedHelper")

describe("teste de Inicialização e Exibição", ()=>{
    it("Componentes de Index", ()=>{
        const {getByText, getByTestId} = render(<App />)

        expect (getByText("Tela Inicial")).toBeTruthy()
        expect(getByTestId("btnindex")).toBeTruthy();
    })
})
describe("Testes de Navegação", ()=>{
    it ("Navegação de Index para Dobro",()=>{
        const{getByText, getByTestId} = render(<App />)

        const botao = getByTestId("btnindex")
        fireEvent.press(botao)
        expect(getByText("Tela Dobro")).toBeTruthy();
    })
})