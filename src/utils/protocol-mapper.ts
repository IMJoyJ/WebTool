/**
 * Protocol Mapper: formats proxy/protocol types into neutral, standardized terminology.
 */

const PROTOCOL_MAP: Record<string, string> = {
  // Common protocols -> Standard N
  shadowsocks: 'Standard 1',
  ss: 'Standard 1',
  shadowsocksr: 'Standard 1-R',
  ssr: 'Standard 1-R',
  vmess: 'Standard 2',
  vless: 'Standard 3',
  trojan: 'Standard 4',
  hysteria: 'Standard 5',
  hysteria2: 'Standard 6',
  hy2: 'Standard 6',
  wireguard: 'Standard 7',
  wg: 'Standard 7',
  tuic: 'Standard 8',
  snell: 'Standard 9',

  // Standard network types
  socks: 'Socket',
  socks5: 'Socket 5',
  http: 'Web',
  https: 'Web (Secure)',

  // Special / Internal types
  direct: 'Direct',
  reject: 'Block',
  compatible: 'Compatible',
  pass: 'Pass',
  relay: 'Chain',

  // Group types
  selector: 'Manual',
  urltest: 'Auto',
  fallback: 'Backup',
  loadbalance: 'Balanced',
}

export function formatProtocolType(rawType: string | undefined | null): string {
  if (!rawType) return ''
  const trimmed = rawType.trim()
  if (!trimmed) return ''
  const key = trimmed.toLowerCase()
  if (PROTOCOL_MAP[key]) {
    return PROTOCOL_MAP[key]
  }

  // If rawType contains sensitive protocol names, replace them
  const sanitized = trimmed
    .replace(/shadowsocksr/gi, 'Standard 1-R')
    .replace(/shadowsocks/gi, 'Standard 1')
    .replace(/vmess/gi, 'Standard 2')
    .replace(/vless/gi, 'Standard 3')
    .replace(/trojan/gi, 'Standard 4')
    .replace(/hysteria2/gi, 'Standard 6')
    .replace(/hysteria/gi, 'Standard 5')
    .replace(/wireguard/gi, 'Standard 7')
    .replace(/tuic/gi, 'Standard 8')
    .replace(/snell/gi, 'Standard 9')
    .replace(/mihomo/gi, 'Kernel')
    .replace(/clash/gi, 'Tool')

  return sanitized
}
