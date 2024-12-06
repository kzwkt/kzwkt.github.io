 https://en.wikipedia.org/wiki/Comparison_of_video_container_formats

# container video format 
 containers refer to the file that contained encoded audio and video , with metadata, subtitle , chapter etc

MP4 (MPEG-4 Part 14) 
Patent encumbered
Codecs: H.264, H.265 (HEVC), AAC

MKV (Matroska Video)
Freely licensed
Codecs: H.264, H.265, VP9.

AVI (Audio Video Interleave)
Proprietary
Codecs: DivX, Xvid, MPEG-4.
no streaming

MOV (Apple QuickTime Movie)
Codecs: H.264, ProRes.


 FLV (Flash Video)
 Codecs: Sorenson Spark, VP6.

 WebM(google)
 Royalty-free
 Codecs: VP8, VP9, AV1.

 MPEG (Moving Picture Experts Group)
 MPEG-1, MPEG-2.

 MPEG-2 is considered outdated
 but its simplicity for modern hardware and widespread adoption in distribution standards make it difficult to phase out completely.
 However, its licensing fees and costs often lead device manufacturers to avoid supporting it when possible
 which is why many portable and embedded devices lack MPEG-2 compatibility.
 
Interlaced Video 	Supported
Intraframe compression 	Supported, but extremely uncommon outside MPEG-IMX
Subsampling Ratios 	4:2:0 or 4:2:2
Color bit depth 	8-bit
Common containers 	MPEG-PS, MPEG-TS, MXF, VOB, MOV in some Final Cut workflows, MKV possible but exceedingly rare
Alpha channel :	Not supported
Stereoscopy  :	Not officially supported
 
 Ogg (ogg,ogv)
 Open source

# Intraframe vs. Interframe compression
Intraframe compression treats each frame as an independent image, compressing it individually without relying on other frames, similar to how frames on a film reel are stored separately.
interframe compression encodes multiple frames together in a structure called a Group of Pictures (GoP). A typical GoP represents half a second to a second of video but can vary depending 
on its intended use. There are also Open GoPs, which lack fixed boundaries and conclude arbitrarily when encoding stops. Despite the term, Open GoPs are essentially variable-length GoPs.

Each GoP begins with an I-frame (or "keyframe"), a fully self-contained image compressed independently. Following the I-frame are P-frames and B-frames, which only store changes from preceding 
or succeeding frames. These changes are captured using macroblocks, which include new visual data, and motion vectors, which describe the movement of macroblocks within the frame.

As P-frames and B-frames depend on other frames within the GoP, decoding any frame (except the I-frame) requires processing the entire GoP. This reliance makes interframe compression computationally 
intensive to encode and decode. However, by reducing redundancy across frames, interframe compression achieves a higher compression ratio, making it efficient for storage and streaming.
Still, due to the loss of visual data deemed redundant, it is unsuitable for archival purposes.

# Profiles and Levels
Profiles specify the range of encoding features available, while levels indicate the amount of data and performance requirements. 
By combining profiles and levels, a decoder can outline its maximum computational capacity and data-handling capability. 
This information allows video to be encoded in a way that ensures compatibility with the target decoder.

# codecs

 HEVC(High Efficiency Video Coding) / H.265/ MPEG-H Part 2
Patent encumbered , MPEG LA license
sucessor to  Advanced Video Coding (AVC, H.264, or MPEG-4 Part 10)
max resolution 8192×4320

MPEG-4 AVC (H.264)
Patent encumbered



