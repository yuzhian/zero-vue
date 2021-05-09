import { message, notification } from 'ant-design-vue'

message.config({
  maxCount: 3,
});

notification.config({
  placement: 'bottomRight',
  bottom: '50px',
  duration: 3,
})
