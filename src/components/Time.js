import dayjs from "dayjs";
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime)

export default function Time({ time }) {
  return <>{dayjs(time* 1000).fromNow()}</>;
}
