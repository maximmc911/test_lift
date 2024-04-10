import { ref, reactive } from 'vue';
   export const floor = reactive([
        {
            position: `absolute`,
            bottom: `0%`,
            transition: `1s`,
            transform: `translate(0, 0)`,
        },
        {
            floor: 1,
            pointer: 'waiting',
     
        }
    ]);