import { validateCpf } from "../src/validateCpf";

test.each([
    "97456321558",
	"71428793860",
	"87748248800"
])("Should test if cpf is valid %s", function (cpf: string) {
    const isValid = validateCpf(cpf);
    expect(isValid).toBe(true);
});

it.each([
    "",
	null,
	undefined,
	"123456",
	"12345678901234567890",
	"11111111111"
])("Should test is cpf is invalid %s", function (cpf: any) {
    const isValid = validateCpf(cpf);
    expect(isValid).toBe(false);
});