import Select from '@dinui/react/select'

export default function SelectScrollable() {
  return (
    <Select>
      <Select.Trigger className="w-[280px]">
        <Select.Value placeholder="Select a timezone" />
      </Select.Trigger>
      <Select.Content>
        <Select.Content.Group>
          <Select.Content.Group.Label>North America</Select.Content.Group.Label>
          <Select.Content.Item value="est">Eastern Standard Time (EST)</Select.Content.Item>
          <Select.Content.Item value="cst">Central Standard Time (CST)</Select.Content.Item>
          <Select.Content.Item value="mst">Mountain Standard Time (MST)</Select.Content.Item>
          <Select.Content.Item value="pst">Pacific Standard Time (PST)</Select.Content.Item>
          <Select.Content.Item value="akst">Alaska Standard Time (AKST)</Select.Content.Item>
          <Select.Content.Item value="hst">Hawaii Standard Time (HST)</Select.Content.Item>
        </Select.Content.Group>
        <Select.Content.Group>
          <Select.Content.Group.Label>Europe & Africa</Select.Content.Group.Label>
          <Select.Content.Item value="gmt">Greenwich Mean Time (GMT)</Select.Content.Item>
          <Select.Content.Item value="cet">Central European Time (CET)</Select.Content.Item>
          <Select.Content.Item value="eet">Eastern European Time (EET)</Select.Content.Item>
          <Select.Content.Item value="west">
            Western European Summer Time (WEST)
          </Select.Content.Item>
          <Select.Content.Item value="cat">Central Africa Time (CAT)</Select.Content.Item>
          <Select.Content.Item value="eat">East Africa Time (EAT)</Select.Content.Item>
        </Select.Content.Group>
        <Select.Content.Group>
          <Select.Content.Group.Label>Asia</Select.Content.Group.Label>
          <Select.Content.Item value="msk">Moscow Time (MSK)</Select.Content.Item>
          <Select.Content.Item value="ist">India Standard Time (IST)</Select.Content.Item>
          <Select.Content.Item value="cst_china">China Standard Time (CST)</Select.Content.Item>
          <Select.Content.Item value="jst">Japan Standard Time (JST)</Select.Content.Item>
          <Select.Content.Item value="kst">Korea Standard Time (KST)</Select.Content.Item>
          <Select.Content.Item value="ist_indonesia">
            Indonesia Central Standard Time (WITA)
          </Select.Content.Item>
        </Select.Content.Group>
        <Select.Content.Group>
          <Select.Content.Group.Label>Australia & Pacific</Select.Content.Group.Label>
          <Select.Content.Item value="awst">
            Australian Western Standard Time (AWST)
          </Select.Content.Item>
          <Select.Content.Item value="acst">
            Australian Central Standard Time (ACST)
          </Select.Content.Item>
          <Select.Content.Item value="aest">
            Australian Eastern Standard Time (AEST)
          </Select.Content.Item>
          <Select.Content.Item value="nzst">New Zealand Standard Time (NZST)</Select.Content.Item>
          <Select.Content.Item value="fjt">Fiji Time (FJT)</Select.Content.Item>
        </Select.Content.Group>
        <Select.Content.Separator />
        <Select.Content.Group>
          <Select.Content.Group.Label>South America</Select.Content.Group.Label>
          <Select.Content.Item value="art">Argentina Time (ART)</Select.Content.Item>
          <Select.Content.Item value="bot">Bolivia Time (BOT)</Select.Content.Item>
          <Select.Content.Item value="brt">Brasilia Time (BRT)</Select.Content.Item>
          <Select.Content.Item value="clt">Chile Standard Time (CLT)</Select.Content.Item>
        </Select.Content.Group>
      </Select.Content>
    </Select>
  )
}
