type ButtonProps = {
  icon: any
  text: string,
  selected?: boolean
}

function Button(props: ButtonProps) {
  let {icon, text, selected = false} = props;

  return <button className={`flex gap-1 border rounded text-xs p-2 border-sky-500 ${selected ? 'text-white bg-sky-500' : 'text-sky-500'}`}>
    {icon}
    {text}
  </button>
}

export default Button