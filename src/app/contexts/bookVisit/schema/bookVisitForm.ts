import {z} from 'zod';
import {setInputRule} from '@/utils/setInputRule';
import {RegisterZod} from '@/app/schema/register';

const BookVisitFromRegisterZod = RegisterZod.pick({firstName: true, lastName: true, mobileNumber: true});

export const BookVisitZod = BookVisitFromRegisterZod.extend({
    projectName: z.string({required_error: setInputRule('requiredSelectBox', {inputName: 'پروژه'})}),
    gender: z.string({required_error: setInputRule('requiredSelectBox', {inputName: 'جنسیت'})}),
    date: z.any({required_error: setInputRule('requiredInput', {inputName: 'تاریخ بازدید'})}),
    time: z.string({required_error: setInputRule('requiredRadio', {inputName: 'بازه زمانی'})})
});

export const BookVisitRequestZod = BookVisitZod.omit({date: true, time: true}).extend({
    selectedDate: z.string()
});

export const BookVisitRequestLegalZod = BookVisitRequestZod.pick({projectName: true, selectedDate: true});
