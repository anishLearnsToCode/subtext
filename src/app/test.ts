import {Message} from "./message/message";
import {MessageType} from "./message/message-type.enum";

this.physicsGroupMessages.push(
  new Message('piyush', 'physics', "$c = \\pm\\sqrt{a^2 + b^2}$", MessageType.LATEX),
  new Message('piyush', 'physics', '$\\sum_{i=1}^nx_i$', MessageType.LATEX),
  new Message('piyush', 'physics', '$x^2 + 5$', MessageType.LATEX),
  new Message('piyush', 'physics', '$\\sum_{i=1}^n(x_i^2 - \\overline{x}^2)$', MessageType.LATEX),
);
