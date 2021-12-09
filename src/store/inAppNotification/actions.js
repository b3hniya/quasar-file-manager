export function raiseAnError(context, message) {
  context.commit("componentDisplayMutation", true);
  context.commit("typeMutation", "error");
  context.commit("messageMutation", message);
}

