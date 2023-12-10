import { z } from 'zod';
import { setInputRule } from '../../../utils/setInputRule';

export const BookVisitFormZod = z.object({
  projectName: z.string({ required_error: setInputRule('requiredSelectBox', { inputName: 'پروژه' }) })
});
