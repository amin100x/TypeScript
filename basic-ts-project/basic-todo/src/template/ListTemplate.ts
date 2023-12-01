import FullList from "../model/FullList";

interface DOMlist {
    ul: HTMLUListElement,
    clear(): void,
    render(fullList: FullList): void
}

export default class ListTemplate implements DOMlist {

    ul: HTMLUListElement
    static instance: ListTemplate = new ListTemplate()

    private constructor() {
        this.ul = document.getElementById("listItems") as HTMLUListElement
    }
    clear(): void {
        this.ul.innerHTML = ' '
    }
    render(fullList: FullList): void {
        this.clear()
        fullList.list.forEach(item => {
            const li = document.createElement('li') as HTMLLIElement
            li.className = 'item'

            const checkBox = document.createElement('input') as HTMLInputElement
            checkBox.type = 'checkbox'
            checkBox.id = item.id
            checkBox.checked = item.checked
            li.append(checkBox)

            checkBox.addEventListener('change', () => {
                item.checked = !item.checked
                fullList.save()
            })

            const label = document.createElement("label") as HTMLLabelElement
            label.htmlFor = item.id
            label.textContent = item.item
            li.append(label)

            const button = document.createElement("button") as HTMLButtonElement
            button.className = 'button'
            button.textContent = 'X'
            li.append(button)

            button.addEventListener('click', () => {
                fullList.removeItem(item.id)
                this.render(fullList)
            })

            this.ul.append(li)
        });
    }
}