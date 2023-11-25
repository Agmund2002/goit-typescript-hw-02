/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/
interface Info {
  title: string
}

class Component<T> {
  constructor(public props: T) {
    this.props = props
  }
}

class Page extends Component<Info> {
  pageInfo () {
    console.log(this.props.title);
  }
}

export {};