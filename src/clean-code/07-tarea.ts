(() => {
  //* Aplicar el principio de responsabilidad única
  //* Priorizar la composición frente a la herencia

  type HtmlType = "input" | "select" | "textarea" | "radio";

  interface HtmlElementProps {
    id: string;
    type: HtmlType;
  }

  class HtmlElement {
    public id: string;
    public type: HtmlType;

    constructor({ id, type }: HtmlElementProps) {
      this.id = id;
      this.type = type;
    }
  }

  interface InputAttributesProps {
    value: string;
    placeholder: string;
  }

  class InputAttributes {
    public value: string;
    public placeholder: string;

    constructor({ value, placeholder }: InputAttributesProps) {
      this.value = value;
      this.placeholder = placeholder;
    }
  }

  class InputEvents {
    constructor() {}

    setFocus() {}
    getValue() {}
    isActive() {}
    removeValue() {}
  }

  interface InputElementProps {
    id: string;
    placeholder: string;
    value: string;
    htmlType: HtmlType;
  }

  //? Idea para la nueva clase InputElement
  class InputElement {
    public html: HtmlElement;
    public attributes: InputAttributes;
    public events: InputEvents;

    constructor({ id, placeholder, value, htmlType }: InputElementProps) {
      this.html = new HtmlElement({ id, type: htmlType });
      this.attributes = new InputAttributes({ placeholder, value });
      this.events = new InputEvents();
    }
  }

  const InputElementObj = new InputElement({
    value: "Fernando",
    placeholder: "Enter first name",
    id: "txtName",
    htmlType: "input",
  });

  console.log({ InputElementObj });
})();
