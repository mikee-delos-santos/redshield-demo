type ActionButtonProps = {
  icon: any
}

function ActionButton(props: ActionButtonProps) {
  return <div className="w-8 p-2 rounded-full bg-slate-300 flex justify-center">{props.icon}</div>
}

export default ActionButton