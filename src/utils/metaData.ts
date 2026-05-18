import type { LanguageCode } from "~/utils/translationHooks"

export type LanguageMeta = {
	title: string
	description: string
	keywords: string
}

const metaData: Record<LanguageCode, LanguageMeta> = {
	lv: {
		title:
			"Elworx Auto Detailing Berģos – Sertificēta Detailera Pakalpojumi Pierīgā",
		description:
			"Elworx ir sertificēta auto detailešanas studija Berģos, Pierīgā. Piedāvājam profesionālu auto ķīmisko tīrīšanu, virsbūves pulēšanu, pirmspārdošanas sagatavošanu, ilgstošus aizsargpārklājumus, lukturu restaurāciju un salona ozonēšanu. Uzticiet sava auto kopšanu pieredzējušiem profesionāļiem!",
		keywords:
			"auto detailing Berģi, auto detailing Pierīga, auto ķīmiskā tīrīšana, auto salona tīrīšana, virsbūves pulēšana, pirmspārdošanas sagatavošana, auto aizsargpārklājumi, keramiskais pārklājums auto, lukturu restaurācija, salona ozonēšana, profesionāla auto kopšana, sertificēts detailers, auto ādas krāsošana, mašīnas spodrināšana, auto detailešana Berģi",
	},
	en: {
		title:
			"Elworx Auto Detailing Berģi – Certified Detailing Services Near Riga",
		description:
			"Elworx is a certified car detailing studio in Berģi, near Riga. We offer professional car chemical cleaning, body polishing, pre-sale preparation, long-lasting protective coatings, headlight restoration, and interior ozone treatment. Entrust your car's care to experienced professionals!",
		keywords:
			"auto detailing Berģi, car detailing near Riga, car chemical cleaning, car interior cleaning, car body polishing, pre-sale car preparation, car protective coatings, ceramic coating car, headlight restoration, interior ozone treatment, professional car care, certified car detailer, car leather dyeing, car buffing, car aesthetics",
	},
	ru: {
		title:
			"Elworx Авто Детейлинг Берги – Сертифицированные Услуги Детейлинга у Риги",
		description:
			"Elworx – сертифицированная студия авто детейлинга в Берги, рядом с Ригой. Предлагаем профессиональную химчистку автомобиля, полировку кузова, предпродажную подготовку, долговечные защитные покрытия, восстановление фар и озонирование салона. Доверьте уход за вашим автомобилем опытным профессионалам!",
		keywords:
			"авто детейлинг Берги, детейлинг рядом с Ригой, химчистка автомобиля, химчистка салона авто, полировка кузова, предпродажная подготовка авто, защитные покрытия кузова, керамическое покрытие авто, восстановление фар, озонирование салона, профессиональный уход за авто, сертифицированный детейлер, покраска кожи авто, полировка машины",
	},
}

export function getMetaData(lang: LanguageCode): LanguageMeta {
	return metaData[lang] ?? metaData.en
}
