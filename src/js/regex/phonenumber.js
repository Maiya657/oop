export default function phoneNumber(number) {
      const re = /^(\+\d{1,3}|8)[\s\-]?[\(]?(\d{3})[\)]?[\s\-]?(\d{3})[\s\-]?(\d{2})[\s\-]?(\d{2})/gm;
      const match = re.exec(number);

      return `${match[1] === '8' ? '+7' : match[1]}${match[2]}${match[3]}${match[4]}${match[5]}`;
}