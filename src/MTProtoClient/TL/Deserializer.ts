// export class Deserializer {

//     public buffer: ArrayBuffer

//     public byteView: Uint8Array<ArrayBuffer>
//     public dataView: DataView

//     public offset: number

//     public constructor(buffer: ArrayBuffer){
//         this.buffer = buffer

//         this.byteView = new Uint8Array(buffer)

//         this.dataView = new DataView(
//             this.buffer,
//             this.byteView.byteOffset,
//             this.byteView.byteLength
//         )

//         this.offset = 0
//     }

//     public uint32() {
//         const value = this.dataView.getUint32(this.offset, true)
//         this.offset += 4
//         return value
//     }

//     public int32() {
//         const value = this.dataView.getInt32(this.offset, true)
//         this.offset += 4
//         return value
//     }

//     public long(){
//         // const high = this.uint32();
//         // const low = this.uint32();
    
//         // const result = intsToLong(low, high);
    
//         // return result
//     }

//     public bytes() {
//         let length = this.byteView[this.offset++]
//         if (length === 254) {
//           length =
//             this.byteView[this.offset++] |
//             (this.byteView[this.offset++] << 8) |
//             (this.byteView[this.offset++] << 16)
//         }
//         const bytes = this.byteView.slice(this.offset, (this.offset += length))
    
//         while (this.offset % 4 !== 0) {
//           this.offset++
//         }
    
//         return bytes
//     }

// }