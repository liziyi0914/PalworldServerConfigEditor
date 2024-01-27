import React, { useCallback, useMemo, useState } from 'react';
import { App, Button, Divider, Form, Input, Upload } from 'antd';
import { BetaSchemaForm } from '@ant-design/pro-components';
import { ProFormColumnsType } from '@ant-design/pro-form/es/components/SchemaForm/typing';
import ini from 'ini';
import { DownloadOutlined, GithubOutlined, UploadOutlined } from '@ant-design/icons';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { useIntl } from '@@/exports';
import { lodash } from '@umijs/utils';

const TEMPLATE = '[/Script/Pal.PalGameWorldSettings]\nOptionSettings=(%)\n';
const DEFAULT = 'Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,ExpRate=1.000000,PalCaptureRate=1.000000,PalSpawnNumRate=1.000000,PalDamageRateAttack=1.000000,PalDamageRateDefense=1.000000,PlayerDamageRateAttack=1.000000,PlayerDamageRateDefense=1.000000,PlayerStomachDecreaceRate=1.000000,PlayerStaminaDecreaceRate=1.000000,PlayerAutoHPRegeneRate=1.000000,PlayerAutoHpRegeneRateInSleep=1.000000,PalStomachDecreaceRate=1.000000,PalStaminaDecreaceRate=1.000000,PalAutoHPRegeneRate=1.000000,PalAutoHpRegeneRateInSleep=1.000000,BuildObjectDamageRate=1.000000,BuildObjectDeteriorationDamageRate=1.000000,CollectionDropRate=1.000000,CollectionObjectHpRate=1.000000,CollectionObjectRespawnSpeedRate=1.000000,EnemyDropItemRate=1.000000,DeathPenalty=All,bEnablePlayerToPlayerDamage=False,bEnableFriendlyFire=False,bEnableInvaderEnemy=True,bActiveUNKO=False,bEnableAimAssistPad=True,bEnableAimAssistKeyboard=False,DropItemMaxNum=3000,DropItemMaxNum_UNKO=100,BaseCampMaxNum=128,BaseCampWorkerMaxNum=15,DropItemAliveMaxHours=1.000000,bAutoResetGuildNoOnlinePlayers=False,AutoResetGuildTimeNoOnlinePlayers=72.000000,GuildPlayerMaxNum=20,PalEggDefaultHatchingTime=72.000000,WorkSpeedRate=1.000000,bIsMultiplay=False,bIsPvP=False,bCanPickupOtherGuildDeathPenaltyDrop=False,bEnableNonLoginPenalty=True,bEnableFastTravel=True,bIsStartLocationSelectByMap=True,bExistPlayerAfterLogout=False,bEnableDefenseOtherGuildPlayer=False,CoopPlayerMaxNum=4,ServerPlayerMaxNum=32,ServerName="Default Palworld Server",ServerDescription="",AdminPassword="",ServerPassword="",PublicPort=8211,PublicIP="",RCONEnabled=False,RCONPort=25575,Region="",bUseAuth=True,BanListURL="https://api.palworldgame.com/api/banlist.txt"';

const Page: React.FC = () => {
  const {message} = App.useApp();
  const [form] = Form.useForm();
  const intl = useIntl();

  const columns = useMemo(()=>{
    let data: ProFormColumnsType[] = [
      {
        title: 'Difficulty',
        name: 'Difficulty',
        initialValue: 'None',
      },
      {
        title: 'DayTimeSpeedRate',
        name: 'DayTimeSpeedRate',
        valueType: 'digit',
        initialValue: 1.000000,
        fieldProps: {
          step: '0.000001',
        },
      },
      {
        title: 'NightTimeSpeedRate',
        name: 'NightTimeSpeedRate',
        valueType: 'digit',
        initialValue: 1.000000,
        fieldProps: {
          step: '0.000001',
        },
      },
      {
        title: 'ExpRate',
        name: 'ExpRate',
        valueType: 'digit',
        initialValue: 1.000000,
        fieldProps: {
          step: '0.000001',
        },
      },
      {
        title: 'PalCaptureRate',
        name: 'PalCaptureRate',
        valueType: 'digit',
        initialValue: 1.000000,
        fieldProps: {
          step: '0.000001',
        },
      },
      {
        title: 'PalSpawnNumRate',
        name: 'PalSpawnNumRate',
        valueType: 'digit',
        initialValue: 1.000000,
        fieldProps: {
          step: '0.000001',
        },
      },
      {
        title: 'PalDamageRateAttack',
        name: 'PalDamageRateAttack',
        valueType: 'digit',
        initialValue: 1.000000,
        fieldProps: {
          step: '0.000001',
        },
      },
      {
        title: 'PalDamageRateDefense',
        name: 'PalDamageRateDefense',
        valueType: 'digit',
        initialValue: 1.000000,
        fieldProps: {
          step: '0.000001',
        },
      },
      {
        title: 'PlayerDamageRateAttack',
        name: 'PlayerDamageRateAttack',
        valueType: 'digit',
        initialValue: 1.000000,
        fieldProps: {
          step: '0.000001',
        },
      },
      {
        title: 'PlayerDamageRateDefense',
        name: 'PlayerDamageRateDefense',
        valueType: 'digit',
        initialValue: 1.000000,
        fieldProps: {
          step: '0.000001',
        },
      },
      {
        title: 'PlayerStomachDecreaceRate',
        name: 'PlayerStomachDecreaceRate',
        valueType: 'digit',
        initialValue: 1.000000,
        fieldProps: {
          step: '0.000001',
        },
      },
      {
        title: 'PlayerStaminaDecreaceRate',
        name: 'PlayerStaminaDecreaceRate',
        valueType: 'digit',
        initialValue: 1.000000,
        fieldProps: {
          step: '0.000001',
        },
      },
      {
        title: 'PlayerAutoHPRegeneRate',
        name: 'PlayerAutoHPRegeneRate',
        valueType: 'digit',
        initialValue: 1.000000,
        fieldProps: {
          step: '0.000001',
        },
      },
      {
        title: 'PlayerAutoHpRegeneRateInSleep',
        name: 'PlayerAutoHpRegeneRateInSleep',
        valueType: 'digit',
        initialValue: 1.000000,
        fieldProps: {
          step: '0.000001',
        },
      },
      {
        title: 'PalStomachDecreaceRate',
        name: 'PalStomachDecreaceRate',
        valueType: 'digit',
        initialValue: 1.000000,
        fieldProps: {
          step: '0.000001',
        },
      },
      {
        title: 'PalStaminaDecreaceRate',
        name: 'PalStaminaDecreaceRate',
        valueType: 'digit',
        initialValue: 1.000000,
        fieldProps: {
          step: '0.000001',
        },
      },
      {
        title: 'PalAutoHPRegeneRate',
        name: 'PalAutoHPRegeneRate',
        valueType: 'digit',
        initialValue: 1.000000,
        fieldProps: {
          step: '0.000001',
        },
      },
      {
        title: 'PalAutoHpRegeneRateInSleep',
        name: 'PalAutoHpRegeneRateInSleep',
        valueType: 'digit',
        initialValue: 1.000000,
        fieldProps: {
          step: '0.000001',
        },
      },
      {
        title: 'BuildObjectDamageRate',
        name: 'BuildObjectDamageRate',
        valueType: 'digit',
        initialValue: 1.000000,
        fieldProps: {
          step: '0.000001',
        },
      },
      {
        title: 'BuildObjectDeteriorationDamageRate',
        name: 'BuildObjectDeteriorationDamageRate',
        valueType: 'digit',
        initialValue: 1.000000,
        fieldProps: {
          step: '0.000001',
        },
      },
      {
        title: 'CollectionDropRate',
        name: 'CollectionDropRate',
        valueType: 'digit',
        initialValue: 1.000000,
        fieldProps: {
          step: '0.000001',
        },
      },
      {
        title: 'CollectionObjectHpRate',
        name: 'CollectionObjectHpRate',
        valueType: 'digit',
        initialValue: 1.000000,
        fieldProps: {
          step: '0.000001',
        },
      },
      {
        title: 'CollectionObjectRespawnSpeedRate',
        name: 'CollectionObjectRespawnSpeedRate',
        valueType: 'digit',
        initialValue: 1.000000,
        fieldProps: {
          step: '0.000001',
        },
      },
      {
        title: 'EnemyDropItemRate',
        name: 'EnemyDropItemRate',
        valueType: 'digit',
        initialValue: 1.000000,
        fieldProps: {
          step: '0.000001',
        },
      },
      {
        title: 'DeathPenalty',
        name: 'DeathPenalty',
        initialValue: 'All',
        valueType: 'select',
        valueEnum: {
          'All': 'All',
          'Item': 'Item',
          'ItemAndEquipment': 'ItemAndEquipment',
          'None': 'None',
        },
      },
      {
        title: 'bEnablePlayerToPlayerDamage',
        name: 'bEnablePlayerToPlayerDamage',
        valueType: 'switch',
        initialValue: false,
      },
      {
        title: 'bEnableFriendlyFire',
        name: 'bEnableFriendlyFire',
        valueType: 'switch',
        initialValue: false,
      },
      {
        title: 'bEnableInvaderEnemy',
        name: 'bEnableInvaderEnemy',
        valueType: 'switch',
        initialValue: true,
      },
      {
        title: 'bActiveUNKO',
        name: 'bActiveUNKO',
        valueType: 'switch',
        initialValue: false,
      },
      {
        title: 'bEnableAimAssistPad',
        name: 'bEnableAimAssistPad',
        valueType: 'switch',
        initialValue: true,
      },
      {
        title: 'bEnableAimAssistKeyboard',
        name: 'bEnableAimAssistKeyboard',
        valueType: 'switch',
        initialValue: false,
      },
      {
        title: 'DropItemMaxNum',
        name: 'DropItemMaxNum',
        valueType: 'digit',
        initialValue: 3000,
      },
      {
        title: 'DropItemMaxNum_UNKO',
        name: 'DropItemMaxNum_UNKO',
        valueType: 'digit',
        initialValue: 100,
      },
      {
        title: 'BaseCampMaxNum',
        name: 'BaseCampMaxNum',
        valueType: 'digit',
        initialValue: 128,
      },
      {
        title: 'BaseCampWorkerMaxNum',
        name: 'BaseCampWorkerMaxNum',
        valueType: 'digit',
        initialValue: 15,
      },
      {
        title: 'DropItemAliveMaxHours',
        name: 'DropItemAliveMaxHours',
        valueType: 'digit',
        initialValue: 1.000000,
        fieldProps: {
          step: '0.000001',
        },
      },
      {
        title: 'bAutoResetGuildNoOnlinePlayers',
        name: 'bAutoResetGuildNoOnlinePlayers',
        valueType: 'switch',
        initialValue: false,
      },
      {
        title: 'AutoResetGuildTimeNoOnlinePlayers',
        name: 'AutoResetGuildTimeNoOnlinePlayers',
        valueType: 'digit',
        initialValue: 72.000000,
        fieldProps: {
          step: '0.000001',
        },
      },
      {
        title: 'GuildPlayerMaxNum',
        name: 'GuildPlayerMaxNum',
        valueType: 'digit',
        initialValue: 20,
      },
      {
        title: 'PalEggDefaultHatchingTime',
        name: 'PalEggDefaultHatchingTime',
        valueType: 'digit',
        initialValue: 72.000000,
        fieldProps: {
          step: '0.000001',
        },
      },
      {
        title: 'WorkSpeedRate',
        name: 'WorkSpeedRate',
        valueType: 'digit',
        initialValue: 1.000000,
        fieldProps: {
          step: '0.000001',
        },
      },
      {
        title: 'bIsMultiplay',
        name: 'bIsMultiplay',
        valueType: 'switch',
        initialValue: false,
      },
      {
        title: 'bIsPvP',
        name: 'bIsPvP',
        valueType: 'switch',
        initialValue: false,
      },
      {
        title: 'bCanPickupOtherGuildDeathPenaltyDrop',
        name: 'bCanPickupOtherGuildDeathPenaltyDrop',
        valueType: 'switch',
        initialValue: false,
      },
      {
        title: 'bEnableNonLoginPenalty',
        name: 'bEnableNonLoginPenalty',
        valueType: 'switch',
        initialValue: true,
      },
      {
        title: 'bEnableFastTravel',
        name: 'bEnableFastTravel',
        valueType: 'switch',
        initialValue: true,
      },
      {
        title: 'bIsStartLocationSelectByMap',
        name: 'bIsStartLocationSelectByMap',
        valueType: 'switch',
        initialValue: true,
      },
      {
        title: 'bExistPlayerAfterLogout',
        name: 'bExistPlayerAfterLogout',
        valueType: 'switch',
        initialValue: false,
      },
      {
        title: 'bEnableDefenseOtherGuildPlayer',
        name: 'bEnableDefenseOtherGuildPlayer',
        valueType: 'switch',
        initialValue: false,
      },
      {
        title: 'CoopPlayerMaxNum',
        name: 'CoopPlayerMaxNum',
        valueType: 'digit',
        initialValue: 4,
      },
      {
        title: 'ServerPlayerMaxNum',
        name: 'ServerPlayerMaxNum',
        valueType: 'digit',
        initialValue: 32,
      },
      {
        title: 'ServerName',
        name: 'ServerName',
        valueType: 'text',
        initialValue: 'Default Palworld Server',
      },
      {
        title: 'ServerDescription',
        name: 'ServerDescription',
        valueType: 'text',
        initialValue: '',
      },
      {
        title: 'AdminPassword',
        name: 'AdminPassword',
        valueType: 'text',
        initialValue: '',
      },
      {
        title: 'ServerPassword',
        name: 'ServerPassword',
        valueType: 'text',
        initialValue: '',
      },
      {
        title: 'PublicPort',
        name: 'PublicPort',
        valueType: 'digit',
        initialValue: 8211,
      },
      {
        title: '公网IP',
        tooltip: 'PublicIP',
        name: 'PublicIP',
        valueType: 'text',
        initialValue: '',
      },
      {
        title: 'RCONEnabled',
        name: 'RCONEnabled',
        valueType: 'switch',
        initialValue: false,
      },
      {
        title: 'RCONPort',
        name: 'RCONPort',
        valueType: 'digit',
        initialValue: 25575,
      },
      {
        title: 'Region',
        name: 'Region',
        valueType: 'text',
        initialValue: '',
      },
      {
        title: 'bUseAuth',
        name: 'bUseAuth',
        valueType: 'switch',
        initialValue: true,
      },
      {
        title: 'BanListURL',
        name: 'BanListURL',
        valueType: 'text',
        initialValue: 'https://api.palworldgame.com/api/banlist.txt',
      },
    ];

    for (let i = 0; i < data.length; i++) {
      let item = data[i];
      let title = intl.formatMessage({id: item.name});
      if (item.valueType === 'select') {
        let e = data[i]?.valueEnum as Record<string, string>;
        for (let k in e) {
          if (!e.hasOwnProperty(k)) {
            continue;
          }
          let v = e?.[k];
          if (!v) {
            continue;
          }

          let s = intl.formatMessage({id:`${item.name}.${k}`});
          if (s!==v) {
            e[k] = s;
          }
        }
        data[i]['valueEnum'] = e;
      }
      if (title!==item.name) {
        data[i].title = title;
        data[i].tooltip = item.name;
      }
    }

    return data;
  }, [intl]);

  const [configText, setConfigText] = useState(TEMPLATE.replace('%', DEFAULT));

  const updateConfig = useCallback((values: Record<string, any>)=>{
    let line = columns.map(column=>{
      let key = column.name as string;
      let value = values?.[key];
      let type = column.valueType;

      if (type === 'switch') {
        if (value) {
          return `${key}=True`;
        } else {
          return `${key}=False`;
        }
      } else if (type === 'digit') {
        if (value === 0 || !value) {
          return `${key}=0`;
        } else if (((column?.fieldProps as any)?.step)==='0.000001') {
          return `${key}=${parseFloat(value).toFixed(6)}`;
        } else {
          return `${key}=${parseInt(value)}`;
        }
      } else if (type === 'text') {
        return `${key}="${value}"`;
      } else if (type === 'select') {
        return `${key}=${value}`;
      } else {
        return `${key}=${value}`;
      }
    }).join(',');
    setConfigText(TEMPLATE.replace('%', line));
  }, []);

  const manualEditConfig = useCallback((config: string)=>{
    setConfigText(config);
    let iniConf:{
      '/Script/Pal'?: {
        PalGameWorldSettings?: {
          OptionSettings?: string;
        };
      };
    } = ini.parse(config);

    let settings = iniConf?.['/Script/Pal']?.PalGameWorldSettings?.OptionSettings;

    if (!settings || !/^\(.*\)$/.test(settings)) {
      message.error('配置文件格式错误');
      return;
    }

    settings = settings.substring(1, settings.length - 1);

    form.resetFields();

    let values:Record<string, any> = {};

    settings.split(',').forEach(setting=>{
      let [k,v] = setting.split('=');
      let column = columns.filter(c=>c?.name===k)?.[0];
      if (!column) {
        return;
      }
      if (column.valueType === 'switch') {
        values[k] = v === 'True';
      } else if (column.valueType === 'digit') {
        values[k] = parseFloat(v).toFixed(6);
      } else if (column.valueType === 'text') {
        values[k] = v.substring(1, v.length - 1);
      } else if (column.valueType === 'select') {
        values[k] = v;
      } else {
        values[k] = v;
      }
    });

    form.setFieldsValue(values);
  }, [form]);

  return (
    <div className="flex justify-center">
      <div className="w-192">
        <div className="py-3 text-center font-semibold text-2xl">
          <div>
            Palworld 幻兽帕鲁
          </div>
          <div>
            ini配置文件编辑器
          </div>
        </div>
        <div className="py-2 text-center">
          <Button
            icon={<GithubOutlined/>}
            href="https://github.com/liziyi0914/PalworldServerConfigEditor"
          >Github</Button>
        </div>
        <div>
          <Input.TextArea
            placeholder="配置文件"
            value={configText}
            onChange={(e) => manualEditConfig(e.target.value)}
          />
        </div>
        <div className="py-2 flex justify-center gap-2">
          <Upload
            accept=".ini"
            beforeUpload={(file)=>{
              let reader = new FileReader();
              reader.onload = (e)=>{
                let text = e.target?.result as string;
                manualEditConfig(text);
              };
              reader.readAsText(file);
              return Upload.LIST_IGNORE;
            }}
          >
            <Button icon={<UploadOutlined/>}>上传</Button>
          </Upload>
          <Button
            onClick={()=>{
              navigator.clipboard.readText().then(text=>{
                manualEditConfig(text);
              });
            }}
          >粘贴</Button>
          <div className="flex flex-col justify-center">
            <Divider type="vertical"/>
          </div>
          <CopyToClipboard
            text={configText}
            onCopy={()=>message.success('复制成功')}
          >
            <Button>复制</Button>
          </CopyToClipboard>
          <Button
            type="primary"
            icon={<DownloadOutlined/>}
            onClick={()=>{
              let fileName = 'PalWorldSettings.ini';
              let blob = new Blob([configText]);
              let downloadElement = document.createElement('a');
              let href = window.URL.createObjectURL(blob);
              downloadElement.href = href;
              downloadElement.download = fileName;
              document.body.appendChild(downloadElement);
              downloadElement.click();
              document.body.removeChild(downloadElement);
              window.URL.revokeObjectURL(href);
            }}
          >下载</Button>
        </div>
        <div>
          <BetaSchemaForm
            form={form}
            autoFocus={false}
            submitter={false}
            layout="horizontal"
            labelCol={{ span: 12 }}
            wrapperCol={{ span: 12 }}
            columns={columns}
            onValuesChange={(_,values) => {
              updateConfig(values);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
