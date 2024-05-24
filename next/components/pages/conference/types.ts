export interface ConfRequestToJoinType {
  user: any
}

export interface ConfTaskType {
  task: any
}

export interface ChatTextFieldType {
  value: string;
  onChange: Function;
  onSubmit: Function;
}

export interface MessageType{
  value: string;
  isSelf?: boolean;
}