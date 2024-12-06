const valid_phone_json = {
	'ar_DZ': /^(\+?213|0)(5|6|7)\d{8}$/,
	'ar_SY': /^(!?(\+?963)|0)?9\d{8}$/,
	'ar_SA': /^(!?(\+?966)|0)?5\d{8}$/,
	'en_US': /^(\+?1)?[2-9]\d{2}[2-9](?!11)\d{6}$/,
	'cs_CZ': /^(\+?420)? ?[1-9][0-9]{2} ?[0-9]{3} ?[0-9]{3}$/,
	'de_DE': /^(\+?49[ \.\-])?([\(]{1}[0-9]{1,6}[\)])?([0-9 \.\-\/]{3,20})((x|ext|extension)[ ]?[0-9]{1,4})?$/,
	'da_DK': /^(\+?45)?(\d{8})$/,
	'el_GR': /^(\+?30)?(69\d{8})$/,
	'en_AU': /^(\+?61|0)4\d{8}$/,
	'en_GB': /^(\+?44|0)7\d{9}$/,
	'en_HK': /^(\+?852\-?)?[569]\d{3}\-?\d{4}$/,
	// 'en_IN': /^(\+?91|0)?[789]\d{9}$/,
	'en_IN': /^(\+?91|0)?9\d{9}$/,
	'en_NZ': /^(\+?64)2\d{7,9}$/,
	'en_ZA': /^(\+?27|0)\d{9}$/,
	'en_ZM': /^(\+?26)?09[567]\d{7}$/,
	'es_ES': /^(\+?34)?(6\d{1}|7[1234])\d{7}$/,
	'fi_FI': /^(\+?358|0)\s?(4(0|1|2|4|5)?|50)\s?(\d\s?){4,8}\d$/,
	'fr_FR': /^(\+?33|0)[67]\d{8}$/,
	'he_IL': /^(\+972|0)([23489]|5[0248]|77)[1-9]\d{6}/,
	'hu_HU': /^(\+?36)(20|30|70)\d{7}$/,
	'it_IT': /^(\+?39)?\s?3\d{2} ?\d{6,7}$/,
	// 'ja_JP': /^(\+?81|0)\d{1,4}[ \-]?\d{1,4}[ \-]?\d{4}$/,
	'ja_JP': /^(\+?81)?[89]\d{9}$/,
	'ms_MY': /^(\+?6?01){1}(([145]{1}(\-|\s)?\d{7,8})|([236789]{1}(\s|\-)?\d{7}))$/,
	'nb_NO': /^(\+?47)?[49]\d{7}$/,
	'nl_BE': /^(\+?32|0)4?\d{8}$/,
	'nn_NO': /^(\+?47)?[49]\d{7}$/,
	'pl_PL': /^(\+?48)? ?[5-8]\d ?\d{3} ?\d{2} ?\d{2}$/,
	'pt_BR': /^(\+?55|0)\-?[1-9]{2}\-?[2-9]{1}\d{3,4}\-?\d{4}$/,
	'pt_PT': /^(\+?351)?9[1236]\d{7}$/,
	'ru_RU': /^(\+?7|8)?9\d{9}$/,
	'sr_RS': /^(\+3816|06)[- \d]{5,9}$/,
	'tr_TR': /^(\+?90|0)?5\d{9}$/,
	'ko_KR': /^(\+?82)1[0-9]{9,9}$/,
	'vi_VN': /^(\+?84|0)?((1(2([0-9])|6([2-9])|88|99))|(9((?!5)[0-9])))([0-9]{7})$/,
	'zh_CN': /^(\+?86)1[0-9]{10,10}$/,
	'zh_TW': /^(\+?886|0)?9\d{8}$/,
	'zh_MO': /^(\+?853|0)?6\d{7}$/,
	'zh_SG': /^(\+?65)?[89]\d{7}$/,
	'in_ID': /^(\()?(\+62|62|0)8\d{8,10}$/,
	'en_PH': /^(\+?63|0)9\d{9}$/,
	'en_FJ': /^(\+?679|0)[1-9]\d{6}$/
}

const numberReg = /^-?[1-9][0-9]?.?[0-9]*$/
const intReg = /^-?[1-9][0-9]*$/
const phoneReg = /^1[0-9]{10,10}$/
const auPhoneReg = /^[0-9]{8,}$/
// const emailReg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
const emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
const pwdReg = /^.{6,16}$/
const inviteCodeReg = /^[a-zA-Z0-9]{6,16}$/
// const enReg = /^[a-zA-Z0-9]+$/
const enReg2 = /[\u4e00-\u9fa5]/
export default {
	isAllPhone: function (val: string, countrycode: number) {
		let result = false;
		let phones = countrycode + '' + val.trim();
		switch (countrycode) {
			case 60:
				result = valid_phone_json.ms_MY.test(phones);   //马来西亚
				break;
			case 61:
				result = valid_phone_json.en_AU.test(phones);  //澳大利亚
				break;
			case 62:
				result = valid_phone_json.in_ID.test(phones);  //印度尼西亚
				break;
			case 63:
				result = valid_phone_json.en_PH.test(phones);  //菲律宾
				break;
			case 64:
				result = valid_phone_json.en_NZ.test(phones);  //新西兰
				break;
			case 65:
				result = valid_phone_json.zh_SG.test(phones);  //新加坡
				break;
			case 81:
				result = valid_phone_json.ja_JP.test(phones);    //日本
				break;
			case 82:
				//console.log("韩国：",phones);
				result = valid_phone_json.ko_KR.test(phones);    //韩国
				break;
			case 84:
				result = valid_phone_json.vi_VN.test(phones);    //越南
				break;
			case 86:
				result = valid_phone_json.zh_CN.test(phones);    //中国
				break;
			case 679:
				result = valid_phone_json.en_FJ.test(phones);    //	斐济
				break;
			case 852:
				result = valid_phone_json.en_HK.test(phones);    //中国香港
				break;
			case 853:
				result = valid_phone_json.zh_MO.test(phones);    //中国澳门
				break;
			case 886:
				result = valid_phone_json.zh_TW.test(phones);    //中国台湾
				break;
			case 91:
				result = valid_phone_json.en_IN.test(phones);    //印度
				break;
			case 1:
				result = valid_phone_json.en_US.test(phones);    //美国
				break;
		}
		return result;
	},
	isNumber: function (val: string) {
		return numberReg.test(val.trim())
	},
	isInt: function (val: string) {
		return intReg.test(val.trim())
	},
	isPhone: function (val: string) {
		return phoneReg.test(val.trim())
	},
	isAuPhone: function (val: string) {
		return auPhoneReg.test(val.trim())
	},
	isEmail: function (val: string) {
		return emailReg.test(val.trim())
	},
	isPwd: function (val: string) {
		return pwdReg.test(val.trim())
	},
	isInviteCode: function (val: string) {
		return inviteCodeReg.test(val.trim())
	},
	isEn: function (val: string) {
		return !enReg2.test(val.trim())
	},
	validate: function (data: any, rules: Array<any>) {
		let res = { isOk: true, errmsg: '' }
		if (!rules || !rules.length) {
			return res
		}
		for (let rule of rules) {
			// rule: {name:'', type:'', errmsg:'', min:1, max:2, eq:'', required:Boolean, regex:''}
			if (!rule || !rule.name || !rule.type) {
				continue
			}

			// 如果值不存在
			if (!data[rule.name].trim()) {
				// 如果是必填项就返回错误提示，required可以作为type是为了不同的type能给用户不同的提示
				if (rule.type === 'required' || rule.required) {
					res = { isOk: false, errmsg: rule.errmsg }
					if (!res.errmsg) {
						res.errmsg = '请正确输入所有数据' //默认提示
					}
					return res
				}
				// 如果不是必填项就跳过
				continue
			}
			switch (rule.type) {
				// required 上面已经判断过了
				case 'equals':
				case 'eq':
					if (data[rule.name].trim() !== data[rule.eqName].trim()) {
						res = { isOk: false, errmsg: rule.errmsg }
					}
					break
				case 'number':
					if (!numberReg.test(data[rule.name].trim())) {
						res = { isOk: false, errmsg: rule.errmsg }
					}
					break
				case 'int':
					if (!intReg.test(data[rule.name].trim())) {
						res = { isOk: false, errmsg: rule.errmsg }
					}
					break
				case 'phone':
					if (!phoneReg.test(data[rule.name].trim())) {
						res = { isOk: false, errmsg: rule.errmsg }
					}
					break
				case 'allphone':
					let phones = data.countrycode + '' + data[rule.name].trim();
					switch (data.countrycode) {
						case 60:
							if (!valid_phone_json.ms_MY.test(phones)) {
								res = { isOk: false, errmsg: rule.errmsg }
							}
							break;
						case 61:
							if (!valid_phone_json.en_AU.test(phones)) {
								res = { isOk: false, errmsg: rule.errmsg }
							}
							break;
						case 62:
							if (!valid_phone_json.in_ID.test(phones)) {
								res = { isOk: false, errmsg: rule.errmsg }
							}
							break;
						case 63:
							if (!valid_phone_json.en_PH.test(phones)) {
								res = { isOk: false, errmsg: rule.errmsg }
							}
							break;
						case 64:
							if (!valid_phone_json.en_NZ.test(phones)) {
								res = { isOk: false, errmsg: rule.errmsg }
							}
							break;
						case 65:
							if (!valid_phone_json.zh_SG.test(phones)) {
								res = { isOk: false, errmsg: rule.errmsg }
							}
							break;
						case 81:
							if (!valid_phone_json.ja_JP.test(phones)) {
								res = { isOk: false, errmsg: rule.errmsg }
							}
							break;
						case 82:
							if (!valid_phone_json.ko_KR.test(phones)) {
								res = { isOk: false, errmsg: rule.errmsg }
							}
							break;
						case 84:
							if (!valid_phone_json.vi_VN.test(phones)) {
								res = { isOk: false, errmsg: rule.errmsg }
							}
							break;
						case 86:
							if (!valid_phone_json.zh_CN.test(phones)) {
								res = { isOk: false, errmsg: rule.errmsg }
							}
							break;
						case 679:
							if (!valid_phone_json.en_FJ.test(phones)) {
								res = { isOk: false, errmsg: rule.errmsg }
							}
							break;
						case 852:
							if (!valid_phone_json.en_HK.test(phones)) {
								res = { isOk: false, errmsg: rule.errmsg }
							}
							break;
						case 853:
							if (!valid_phone_json.zh_MO.test(phones)) {
								res = { isOk: false, errmsg: rule.errmsg }
							}
							break;
						case 886:
							if (!valid_phone_json.zh_TW.test(phones)) {
								res = { isOk: false, errmsg: rule.errmsg }
							}
							break;
						case 91:
							if (!valid_phone_json.en_IN.test(phones)) {
								res = { isOk: false, errmsg: rule.errmsg }
							}
							break;
						case 1:
							if (!valid_phone_json.en_US.test(phones)) {
								res = { isOk: false, errmsg: rule.errmsg }
							}
							break;
					}
					// return res;
					break
				case 'auPhone':
					if (!auPhoneReg.test(data[rule.name].trim())) {
						res = { isOk: false, errmsg: rule.errmsg }
					}
					break
				case 'email':
					if (!emailReg.test(data[rule.name].trim())) {
						res = { isOk: false, errmsg: rule.errmsg }
					}
					break
				case 'pwd':
					if (!pwdReg.test(data[rule.name].trim())) {
						res = { isOk: false, errmsg: rule.errmsg }
					}
					break
				case 'inviteCode':
					if (!inviteCodeReg.test(data[rule.name].trim())) {
						res = { isOk: false, errmsg: rule.errmsg }
					}
					break
				case 'en':
					if (enReg2.test(data[rule.name].trim())) {
						res = { isOk: false, errmsg: rule.errmsg }
					}
					break
				case 'range': // 数字类型的值取值范围
					// {name: 'xxx', type: 'range', min: 6, max: 6, required: true, errmsg: 'xxx'}
					let val = data[rule.name].trim()
					if (val) {
						if (numberReg.test(val)) {
							if (rule.min && val < rule.min) {
								res = { isOk: false, errmsg: rule.errmsg }
							} else if (rule.max && val > rule.max) {
								res = { isOk: false, errmsg: rule.errmsg }
							}
						} else {
							res = { isOk: false, errmsg: rule.errmsg }
						}
					}
					break
				case 'lengthRange': // 字符串长度取值范围
					// {name: 'xxx', type: 'lengthRange', min: 6, max: 6, errmsg: 'xxx'}
					let le = data[rule.name].trim() ? data[rule.name].length : 0
					if (rule.min && le < rule.min) {
						res = { isOk: false, errmsg: rule.errmsg }
					} else if (rule.max && le > rule.max) {
						res = { isOk: false, errmsg: rule.errmsg }
					}
					break
				case 'regex': // 自定义正则表达式
					// {name: 'xxx', type: 'regex', regex: /^1[0-9]{10,10}$/, errmsg: 'xxx'}
					if (rule.regex && !rule.regex.test(data[rule.name].trim())) {
						res = { isOk: false, errmsg: rule.errmsg }
					}
					break
			}
			// 发现任何一个错误就立即返回，后面的不再判断
			if (!res.isOk) {
				if (!res.errmsg) {
					res.errmsg = '请正确输入所有数据' //默认提示
				}
				return res
			}
		}
		return res
	}
}