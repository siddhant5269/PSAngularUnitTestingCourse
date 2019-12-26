import { MessageService } from './message.service';
describe('MessageService', () => {
  it('should be true when no item in the list', () => {
    let service = new MessageService();

    expect(service.messages.length).toBe(0);
  });

  it('should be true when message list length is 1', () => {
    const service = new MessageService();

    service.messages.push('siddhant');

    expect(service.messages.length).toBe(1);
  });

  it('should be true if the messages are cleared', () => {
    const service = new MessageService();
    service.messages.push('siddhant');

    service.clear();

    expect(service.messages.length).toBe(0);
  });
});
