const rewire = require("rewire")
const UsersProfile = rewire("./UsersProfile")
const UsersListContainer = UsersProfile.__get__("UsersListContainer")

// @ponicode
describe("handleChange", () => {
    let object
    let inst

    beforeEach(() => {
        object = [["Anas", "Edmond", "Michael"], ["Jean-Philippe", "Jean-Philippe", "Edmond"], ["Michael", "Edmond", "Jean-Philippe"]]
        inst = new UsersListContainer(object)
    })

    test("0", () => {
        let callFunction = () => {
            inst.handleChange({ target: { value: "elio@example.com" } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.handleChange({ target: { value: "Dillenberg" } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst.handleChange({ target: { value: "Elio" } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            inst.handleChange(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("handleCreateSkill", () => {
    let object
    let inst

    beforeEach(() => {
        object = [["Edmond", "Jean-Philippe", "Pierre Edouard"], ["Pierre Edouard", "Pierre Edouard", "Pierre Edouard"], ["Jean-Philippe", "Michael", "Pierre Edouard"]]
        inst = new UsersListContainer(object)
    })

    test("0", () => {
        let callFunction = () => {
            inst.handleCreateSkill()
        }
    
        expect(callFunction).not.toThrow()
    })
})
