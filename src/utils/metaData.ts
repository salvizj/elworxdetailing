import type { LanguageCode } from "~/utils/translationHooks"

export type LanguageMeta = {
	title: string
	description: string
	keywords: string
}

const metaData: Record<LanguageCode, LanguageMeta> = {
	lv: {
		title:
			"Elworx Auto Detailing Salaspilī – Kvalitatīva Auto Kopšana, Pulēšana un Aizsardzība",
		description:
			"Elworx ir sertificēta auto detailešanas studija Salaspilī, netālu no Rīgas. Piedāvājam profesionālu auto ķīmisko tīrīšanu, virsbūves pulēšanu un ilgstošus aizsargpārklājumus. Atjaunojam lukturus, krāsojam ādu un veicam salona ozonēšanu. Uzticiet sava auto izskatu un aizsardzību pieredzējušiem profesionāļiem!",
		keywords:
			"auto detailing Salaspilī, auto ķīmiskā tīrīšana, auto salona tīrīšana, virsbūves pulēšana, auto virsbūves aizsargpārklājumi, keramiskais pārklājums auto, lukturu restaurācija, auto ādas krāsošana, salona ozonēšana, profesionāla auto kopšana, auto apstrāde Rīga, auto detailešana Salaspils, mašīnas spodrināšana, auto dizains",
	},
	en: {
		title:
			"Elworx Auto Detailing Salaspils – Quality Car Care, Polishing & Protection",
		description:
			"Elworx is a certified car detailing studio in Salaspils, near Riga. We offer professional car chemical cleaning, body polishing, and long-lasting protective coatings. We restore headlights, dye leather, and perform interior ozone treatment. Entrust your car's appearance and protection to experienced professionals!",
		keywords:
			"auto detailing Salaspils, car chemical cleaning, car interior cleaning, car body polishing, car body protective coatings, ceramic coating car, headlight restoration, car leather dyeing, interior ozone treatment, professional car care, car treatment Riga, car detailing Salaspils, car buffing, car aesthetics",
	},
	ru: {
		title:
			"Elworx Авто Детейлинг Саласпилс – Качественный Уход, Полировка и Защита Авто",
		description:
			"Elworx – это сертифицированная студия авто детейлинга в Саласпилсе, недалеко от Риги. Мы предлагаем профессиональную химчистку автомобиля, полировку кузова и долговечные защитные покрытия. Восстанавливаем фары, красим кожу и проводим озонирование салона. Доверьте внешний вид и защиту вашего автомобиля опытным профессионалам!",
		keywords:
			"авто детейлинг Саласпилс, химчистка автомобиля, химчистка салона авто, полировка кузова, защитные покрытия кузова, керамическое покрытие авто, восстановление фар, покраска кожи авто, озонирование салона, профессиональный уход за авто, обработка авто Рига, детейлинг Саласпилс, полировка машины, авто дизайн",
	},
}

export function getMetaData(lang: LanguageCode): LanguageMeta {
	return metaData[lang] ?? metaData.en
}
